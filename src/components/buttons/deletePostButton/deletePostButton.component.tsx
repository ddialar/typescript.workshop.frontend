import { FC, useState } from 'react'
import { Button, Icon, Confirm } from 'semantic-ui-react'

interface Props {
    postId: string
    callback: () => void
}

export const DeleteButton: FC<Props> = ({ postId, callback }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const deletePost = () => {
    setConfirmOpen(false)
    console.log(`Delete post with ID ${postId}`)
    callback && callback()
  }

  return (
    <>
      <Button as="div" color="red" floated="right" size="mini" onClick={() => setConfirmOpen(true)}>
        <Icon name="trash" style={{ margin: 0 }}></Icon>
      </Button>
      <Confirm
        open={confirmOpen}
        header="Delete post confimation"
        content={`Do you really want to delete the post with ID '${postId}'?`}
        cancelButton="No"
        confirmButton="Let's do it"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
        size="mini"
      />
    </>
  )
}
