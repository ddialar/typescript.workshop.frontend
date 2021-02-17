import { FC } from 'react'
import { Card } from 'semantic-ui-react'

import { LikePostButton, CommentPostButton } from '@components'

interface Props {
    postId: string
    postOwner: string
    createdAt: string
    body: string
    likes: number
    likedByUser: boolean
    comments: number
}

export const SinglePost: FC<Props> = ({ postId, postOwner, createdAt, body, likes, likedByUser, comments }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{postOwner}</Card.Header>
      <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <hr />
    <Card.Content extra>
      <LikePostButton likes={likes} postId={postId} likedByUser={likedByUser} />
      <CommentPostButton comments={comments} postId={postId} />
    </Card.Content>
  </Card>
)
