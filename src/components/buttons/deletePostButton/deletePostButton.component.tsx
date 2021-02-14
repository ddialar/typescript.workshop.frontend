import React, { FC, useState } from 'react'
import { Button, Icon, Confirm } from 'semantic-ui-react'

interface Props {
    postId: string
    callback: () => void
}

export const DeleteButton: FC<Props> = ({ postId, callback }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const deletePost = () => {
    setConfirmOpen(false)
    // TODO: Remove the post.
    console.log(`Delete post with ID ${postId}`)
    callback && callback()
  }

  return (
    <>
      <Button as="div" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
        <Icon name="trash" style={{ margin: 0 }}></Icon>
      </Button>
      <Confirm open={confirmOpen} onCancel={() => setConfirmOpen(false)} onConfirm={deletePost}>
      </Confirm>
    </>
  )
}
