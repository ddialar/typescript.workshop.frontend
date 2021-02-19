import { FC } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './postCard.styles.css'
import { BasicPost } from '@types'
import { POSTS_PATH } from '@common'
import { LikePostButton, CommentPostButton, Avatar, DeletePostButton } from '@components'

interface Props {
    post: BasicPost
    token: string | undefined
    onDelete: () => void
}

export const PostCard: FC<Props> = ({ post: { id, owner, body, commentsAmount, likesAmount, createdAt, userIsOwner, userHasLiked }, token, onDelete }) => {
  return (
    <Card fluid>
      <Card.Content as={Link} to={`${POSTS_PATH}/${id}`}>
        <Avatar floated='right' size='mini' src={owner.avatar} />
        <Card.Header>{`${owner.name} ${owner.surname}`}</Card.Header>
        <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
        <Card.Description className="custom-post-card-description">
          <div>{body}</div>
          <div></div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikePostButton likes={likesAmount} postId={id} likedByUser={userHasLiked} />
        <CommentPostButton comments={commentsAmount} postId={id} />
        {token && userIsOwner ? <DeletePostButton postId={id} onClick={() => onDelete()} /> : null}
      </Card.Content>
    </Card>
  )
}
