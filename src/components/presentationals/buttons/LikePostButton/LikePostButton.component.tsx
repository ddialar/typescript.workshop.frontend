import { FC } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

interface Props {
    likes: number
    userHasLiked: boolean
    onClick: () => void
}

export const LikePostButton: FC<Props> = ({ likes, userHasLiked = false, onClick }) => {
  return (
    <Button as="div" labelPosition="right" size="mini" onClick={onClick}>
      <Button color="teal" basic={!userHasLiked} compact>
        <Icon name="heart"></Icon>
      </Button>
      <Label color="teal" pointing="left" basic>{likes}</Label>
    </Button>
  )
}
