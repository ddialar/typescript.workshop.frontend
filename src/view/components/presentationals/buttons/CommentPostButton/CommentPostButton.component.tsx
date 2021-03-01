import { FC } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

interface Props {
    comments: number
    postId: string
}

export const CommentPostButton: FC<Props> = ({ comments, postId }) => {
  const handleCommentPost = () => {
    console.log(`Post ${postId} comment button pushed!!!`)
  }

  return (
    <Button as="div" labelPosition="right" size="mini" onClick={handleCommentPost}>
      <Button color="blue" basic compact>
        <Icon name="comments"></Icon>
      </Button>
      <Label color="blue" pointing="left" basic>{comments}</Label>
    </Button>
  )
}
