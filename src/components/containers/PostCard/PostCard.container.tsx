import { FC } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './PostCard.styles.css'
import { BasicPost } from '@types'
import { POSTS_PATH } from '@common'
import { LikePostButton, CommentPostButton, Avatar, DeleteButton } from '@components'

interface Props {
    post: BasicPost
    token?: string
    onLike: () => void
    onDelete: () => void
}

export const PostCard: FC<Props> = ({ post: { id, owner, body, commentsAmount, likesAmount, createdAt, userIsOwner, userHasLiked }, token, onLike, onDelete }) => {
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
        <LikePostButton likes={likesAmount} userHasLiked={userHasLiked} onClick={() => onLike()} />
        <CommentPostButton comments={commentsAmount} postId={id} />
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
}
