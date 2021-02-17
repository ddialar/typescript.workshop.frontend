import { FC, useState } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

interface Props {
    likes: number
    postId: string
    likedByUser: boolean
}

export const LikePostButton: FC<Props> = ({ likes, postId, likedByUser = false }) => {
  const [liked, setLiked] = useState(likedByUser)

  const handleLikePost = () => {
    // TODO: Connect with API and like button
    setLiked(!liked)
    console.log(`Post ${postId} like button pushed!!!`)
  }

  return (
    <Button as="div" labelPosition="right" size="mini" onClick={handleLikePost}>
      <Button color="teal" basic={!liked} compact>
        <Icon name="heart"></Icon>
      </Button>
      <Label color="teal" pointing="left" basic>{likes}</Label>
    </Button>
  )
}
