import React, { FC, useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'

import { ApiError, FullPost, PostComment } from '@types'
import { SinglePost, SinglePostComment } from '@containers'
import { Avatar, ErrorComponent, Spinner } from '@components'

import { getPostById } from '@dataSources'
interface Props {
    postId: string
}

export const SinglePostLayout: FC<Props> = ({ postId }) => {
  const [post, setPost] = useState<FullPost | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const result = await getPostById(postId)

      const { error } = result as ApiError
      if (error) {
        const { message } = result as ApiError
        setError(message)
      } else {
        setPost(result as FullPost | null)
      }
      setLoading(false)
    })()
  }, [postId])

  const generatePostComments = (postComments: PostComment[]) => postComments
    .map(({ id, owner: { name, surname }, body, createdAt }) =>
      <SinglePostComment key={id} commentOwner={`${name} ${surname}`} body={body} createdAt={createdAt} />
    )

  const generatePostView = (post: FullPost) => {
    const { owner: { name, surname, avatar }, body, comments, likes, userHasLiked, createdAt } = post
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Avatar floated='right' size='large' src={avatar} />
          </Grid.Column>
          <Grid.Column width={14}>
            <SinglePost
              postId={postId}
              postOwner={`${name} ${surname}`}
              createdAt={createdAt}
              body={body}
              likes={likes.length}
              likedByUser={userHasLiked}
              comments={comments.length}
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
