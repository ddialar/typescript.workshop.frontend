import { FC, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { FullPost, PostComment } from '@types'
import { SinglePost, SinglePostComment } from '@containers'
import { Avatar, ErrorComponent, Spinner } from '@components'

import { deletePostById, getExtendedPostById, getPostById } from '@dataSources'
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

  const deletePost = async (postId: string): Promise<void> => {
    console.log(`Deleting post '${postId}' from posts list layout!!!`)

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

  const generatePostComments = (postComments: PostComment[]) => postComments
    .map(({ id, owner: { name, surname }, body, createdAt }) =>
      <SinglePostComment key={id} commentOwner={`${name} ${surname}`} body={body} createdAt={createdAt} />
    )

  const generatePostView = (post: FullPost) => {
    const { owner: { avatar }, comments } = post
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
              onDelete={() => deletePost(post.id)}
            />
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
