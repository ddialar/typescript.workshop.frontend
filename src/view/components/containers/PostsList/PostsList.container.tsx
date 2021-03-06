import { FC, useState, useEffect, ReactElement, useContext } from 'react'
import { Grid } from 'semantic-ui-react'

import { SECTION_TITLE, NO_POSTS_MESSAGE } from './PostsList.constants'

import { AppContext } from '@context'
import { BasicPost, SingleFormValue } from '@types'
import { PostCard, SingleFieldForm, Spinner, ErrorComponent } from '@components'
import { getAllPosts, getAllExtendedPosts, deletePostById, dislikePost, likePost, createNewPost } from '@dataSources'
import { validateNewPostParams } from '@validators'

export const PostsList: FC = () => {
  const { user } = useContext(AppContext)
  const [posts, setPosts] = useState<BasicPost[]>([])
  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      setLoading(true)

      const result = user?.token ? await getAllExtendedPosts(user.token) : await getAllPosts()

      if ('error' in result) {
        setError(result.message)
      } else {
        setPosts(result)
      }

      setLoading(false)
    })()
  }, [user])

  const toggleLikePost = async (postId: string, isLiked: boolean): Promise<void> => {
    if (user?.token) {
      const result = isLiked ? await dislikePost(postId, user.token) : await likePost(postId, user.token)

      if ('error' in result) {
        setError(result.message)
      } else {
        const postsCopy = [...posts]
        const affectedPostIndex = postsCopy.findIndex(({ id }) => id === postId)!
        postsCopy[affectedPostIndex] = { ...postsCopy[affectedPostIndex], userHasLiked: result.userHasLiked, likesAmount: result.likesAmount }
        setPosts(postsCopy)
      }
    } else {
      setError('You must be authenticated in order to like a post.')
    }
  }

  const addPost = async (postBody: SingleFormValue['fieldContent']) => {
    const validationResult = validateNewPostParams({ postBody })
    if (validationResult.thereAreErrors) {
      setFieldError(validationResult.postBody!)
    } else {
      setFieldError(null)

      const { token } = user!

      const result = await createNewPost(postBody, token)

      if ('error' in result) {
        setError(result.message)
      } else {
        setError(null)
        setPosts([...posts, result])
      }
    }
  }

  const deletePost = async (postId: string): Promise<void> => {
    if (user?.token) {
      setLoading(true)

      const error = await deletePostById(postId, user.token)

      if (error) {
        setError(error.message)
      } else {
        setPosts(posts.filter(({ id }) => id !== postId))
      }

      setLoading(false)
    } else {
      setError('You must be authenticated in order to delete a post.')
    }
  }

  const processPosts = (posts: BasicPost[]): ReactElement => {
    return (
      <Grid.Row columns={3}>
        {
          user?.token
            ? (
              <Grid.Column style={{ marginBottom: '20px' }}>
                <SingleFieldForm
                  title="Create a new post:"
                  placeholder="Hi world!!!"
                  error={fieldError}
                  onSubmit={addPost}
                />
              </Grid.Column>
            )
            : null
        }
        {
          posts.map(post => (
            <Grid.Column key={post.id} style={{ marginBottom: '20px' }}>
              <PostCard
                post={post}
                token={user?.token}
                onLike={() => toggleLikePost(post.id, post.userHasLiked)}
                onDelete={() => deletePost(post.id)}
              />
            </Grid.Column>
          ))
        }
      </Grid.Row>
    )
  }

  const buildPostsList = () => (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1>{posts ? SECTION_TITLE : NO_POSTS_MESSAGE}</h1>
            {error ? (<ErrorComponent message={error}/>) : null}
          </Grid.Column>
        </Grid.Row>
        {posts ? processPosts(posts) : null}
      </Grid>
      <Spinner active={loading} />
    </>
  )

  return buildPostsList()
}
