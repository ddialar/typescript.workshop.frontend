import { FC } from 'react'
import { Card } from 'semantic-ui-react'

import { LikePostButton, CommentPostButton, DeletePostButton } from '@components'
import { FullPost } from '@types'

interface Props {
  post: FullPost
  token?: string
  onDelete: () => void
}

export const SinglePost: FC<Props> = ({ post: { id, owner, createdAt, body, userIsOwner, userHasLiked, comments, likes }, token, onDelete }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{`${owner.name} ${owner.surname}`}</Card.Header>
      <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <hr />
    <Card.Content extra>
      <LikePostButton likes={likes.length} postId={id} likedByUser={userHasLiked} />
      <CommentPostButton comments={comments.length} postId={id} />
      {token && userIsOwner ? <DeletePostButton postId={id} onClick={() => onDelete()} /> : null}
    </Card.Content>
  </Card>
)
