import { FC } from 'react'
import { Card } from 'semantic-ui-react'

import { LikePostButton, CommentPostButton, DeleteButton } from '@components'
import { FullPost } from '@types'

interface Props {
  post: FullPost
  token?: string
  onLike: () => void
  onDelete: () => void
}

export const SinglePostHeader: FC<Props> = ({ post: { id, owner, createdAt, body, userIsOwner, userHasLiked, comments, likes }, token, onLike, onDelete }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{`${owner.name} ${owner.surname}`}</Card.Header>
      <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <hr />
    <Card.Content extra>
      <LikePostButton likes={likes.length} userHasLiked={userHasLiked} onClick={() => onLike()} />
      <CommentPostButton comments={comments.length} postId={id} />
      {
        token && userIsOwner
          ? <DeleteButton
            title="Delete post confirmation"
            message="Do you really want to delete this post?"
            onClick={() => onDelete()} />
          : null
      }
    </Card.Content>
  </Card>
)
