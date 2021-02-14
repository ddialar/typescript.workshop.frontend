import React, { FC } from 'react'
import { Card } from 'semantic-ui-react'

interface Props {
    commentOwner: string
    body: string
    createdAt: string
}

export const SinglePostComment: FC<Props> = ({ commentOwner, body, createdAt }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{commentOwner}</Card.Header>
      <Card.Meta>{(new Date(createdAt)).toLocaleString()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
  </Card>
)
