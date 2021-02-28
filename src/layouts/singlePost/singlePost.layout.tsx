import { FC, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { FullPost, PostComment } from '@types'
import { SinglePost, SinglePostComment } from '@containers'
import { Avatar, ErrorComponent, Spinner } from '@components'

import { deletePostById, dislikePost, getExtendedPostById, getPostById, likePost } from '@dataSources'
import { AppContext } from '@context'
import { POSTS_PATH } from '@navigation'
interface Props {
    postId: string
}

export const SinglePostLayout: FC<Props> = ({ postId }) => {
  const history = useHistory()
  const { user } = useContext(AppContext)
  const [post, setPost] = useState<FullPost | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      setLoading(true)

      const result = user?.token ? await getExtendedPostById(postId, user.token) : await getPostById(postId)

      if ('error' in result) {
        setError(result.message)
      } else {
        setPost(result)
      }

      setLoading(false)
    })()
  }, [])

  const toggleLikePost = async (postId: string, isLiked: boolean): Promise<void> => {
    if (user?.token) {
      const result = isLiked ? await dislikePost(postId, user.token) : await likePost(postId, user.token)

      if ('error' in result) {
        setError(result.message)
      } else {
        post && setPost({ ...post, userHasLiked: result.userHasLiked })
      }
    } else {
      setError('You must be authenticated in order to like this post.')
    }
  }

  const deletePost = async (postId: string): Promise<void> => {
    if (user?.token) {
      setLoading(true)

      const error = await deletePostById(postId, user.token)

      if (error) {
        setError(error.message)
      } else {
        setPost(null)
        history.push(POSTS_PATH)
      }

      setLoading(false)
    } else {
      setError('You must be authenticated in order to delete a post.')
    }
  }

  const addPostComment = async (commentBody: SingleFormValue['fieldContent']) => {
    const { token } = user!
    const { id: postId } = post!
    console.log(`Adding comment '${commentBody}' to post '${postId}'`)

    const result = await createNewPostComment(postId, commentBody, token)

    console.log({ result })

    if ('error' in result) {
      setError(result.message)
    } else {
      setError(null)
      setPost(result)
    }
  }

  const generatePostComments = (postComments: PostComment[]) => postComments
    .map(({ id, owner: { name, surname }, body, createdAt }) =>
      <SinglePostComment key={id} commentOwner={`${name} ${surname}`} body={body} createdAt={createdAt} />
            {
              user?.token
                ? <SingleFieldForm
                  title="New post comment:"
                  placeholder="Really nice content!!!"
                  onSubmit={addPostComment} />
                : null
            }
    )

  const generatePostView = (post: FullPost) => {
    const { id, owner: { avatar }, comments } = post
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Avatar floated='right' size='large' src={avatar} />
          </Grid.Column>
          <Grid.Column width={14}>
            <SinglePost
              post={post}
              token={user?.token}
              onLike={() => toggleLikePost(id, post.userHasLiked)}
              onDelete={() => deletePost(id)}
            />
            {
              user?.token
                ? <SingleFieldForm
                  title="New post comment:"
                  placeholder="Really nice content!!!"
                  onSubmit={addPostComment} />
                : null
            }
            {comments && generatePostComments(comments)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  const showContent = () => {
    return post ? generatePostView(post as FullPost) : (<Spinner active={loading}/>)
  }

  return error ? (<ErrorComponent message={error as string}/>) : showContent()
}
