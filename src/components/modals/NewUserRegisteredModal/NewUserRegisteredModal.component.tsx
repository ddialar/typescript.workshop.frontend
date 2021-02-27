import { FC } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

import { CONFIRM_BUTTON_MESSAGE, INSTRUCTIONS_TEXT } from './NewUserRegisteredModal.constants'

interface Props {
  isOpen: boolean
  fullName: string
  avatar: string
  username: string
  onClick: () => void
}

export const NewUserRegisteredModal: FC<Props> = ({ isOpen, fullName, avatar, username, onClick }) => (
  <Modal
    size='tiny'
    open={isOpen}
  >
    <Modal.Header>New user registered successfully</Modal.Header>
    <Modal.Content image>
      <Image
        size='small'
        src={avatar}
        circular
      />
      <Modal.Description>
        <h2>{fullName}</h2>
        <p>{username}</p>
        <p>{INSTRUCTIONS_TEXT}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button
        content={CONFIRM_BUTTON_MESSAGE}
        labelPosition="right"
        icon="checkmark"
        onClick={() => onClick()}
        positive
      />
    </Modal.Actions>
  </Modal>
)
