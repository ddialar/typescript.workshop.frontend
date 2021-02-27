import { FC, useState } from 'react'
import { Button, Icon, Confirm } from 'semantic-ui-react'

interface Props {
    title: string
    message: string
    onClick: () => void
}

export const DeleteButton: FC<Props> = ({ title, message, onClick }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const runDelete = () => {
    setConfirmOpen(false)
    onClick && onClick()
  }

  return (
    <>
      <Button as="div" color="red" floated="right" size="mini" onClick={() => setConfirmOpen(true)}>
        <Icon name="trash" style={{ margin: 0 }}></Icon>
      </Button>
      <Confirm
        open={confirmOpen}
        header={title}
        content={message}
        cancelButton="No"
        confirmButton="Let's do it"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={runDelete}
        size="mini"
      />
    </>
  )
}
