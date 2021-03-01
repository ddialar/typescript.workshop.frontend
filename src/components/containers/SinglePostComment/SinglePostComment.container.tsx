import { DeleteButton } from '@components'
import { PostComment } from '@types'
import { FC } from 'react'
import { Card } from 'semantic-ui-react'

interface Props {
    comment: PostComment
    token?: string
    onDelete: () => void
}

export const SinglePostComment: FC<Props> = ({ comment: { owner: { name, surname }, createdAt, body, userIsOwner }, token, onDelete }) => (
  <Card fluid>
    <Card.Content>
      {
        token && userIsOwner
          ? <DeleteButton
            title="Delete post comment confirmation"
            message="Do you really want to delete this post comment?"
            onClick={() => onDelete()} />
          : null}
      <Card.Header>{`${name} ${surname}`}</Card.Header>
      <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
  </Card>
)
