import { FC, FormEvent, SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import { NewUserRegisteredModal, Spinner } from '@components'

import {
  REGISTER_FORM_TITLE,
  REGISTER_FORM_BUTTON_TEXT,
  REGISTER_FORM_NAME,
  REGISTER_FORM_NAME_PLACEHOLDER,
  REGISTER_FORM_SURNAME,
  REGISTER_FORM_SURNAME_PLACEHOLDER,
  REGISTER_FORM_EMAIL,
  REGISTER_FORM_EMAIL_PLACEHOLDER,
  REGISTER_FORM_PASSWORD,
  REGISTER_FORM_CONFIRM_PASSWORD,
  REGISTER_FORM_AVATAR
} from './RegisterForm.constants'
import { registryNewUser } from '@dataSources'
import { LOGIN_PATH } from '@common'
import { SigninFormData, RegisteredUser } from '@types'

// REFACTOR Remove these presets
const initialValues: SigninFormData = {
  name: 'Jane',
  surname: 'Doe',
  avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/128/4043245-avatar-coffee-cup-zorro_113282.png',
  email: 'jane@doe.com',
  password: '123456',
  confirmPassword: '123456'
}

const initialRegisteredUser: RegisteredUser = {
  username: '',
  fullName: '',
  avatar: ''
}

export const RegisterForm: FC = () => {
  const history = useHistory()

  const [values, setValues] = useState<SigninFormData>(initialValues)
  const [registeredUser, setRegisteredUser] = useState<RegisteredUser>(initialRegisteredUser)
  const [loading, setLoading] = useState(false)
  const [requestError, setRequestError] = useState<string | null>(null)

  const [modalOpen, setOpen] = useState(false)

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    setLoading(true)

    const { confirmPassword, ...registryData } = values

    const result = await registryNewUser(registryData)

    if ('error' in result) {
      setRequestError(result.message)
    } else {
      setRegisteredUser(result)
      setOpen(true)
    }

    setLoading(false)
  }

  const onConfirmRegistry = () => {
    setValues(initialValues)
    setRegisteredUser(initialRegisteredUser)
    setOpen(false)
    history.push(LOGIN_PATH)
  }

  return (
    <>
      <Form onSubmit={onSubmit} noValidate>
        <h1>{REGISTER_FORM_TITLE}</h1>
        <Form.Input
          label={REGISTER_FORM_NAME}
          placeholder={REGISTER_FORM_NAME_PLACEHOLDER}
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
        />
        <Form.Input
          label={REGISTER_FORM_SURNAME}
          placeholder={REGISTER_FORM_SURNAME_PLACEHOLDER}
          name="surname"
          type="text"
          value={values.surname}
          onChange={onChange}
        />
        <Form.Input
          label={REGISTER_FORM_AVATAR}
          name="avatar"
          type="text"
          value={values.avatar}
          onChange={onChange}
        />
        <Form.Input
          label={REGISTER_FORM_EMAIL}
          placeholder={REGISTER_FORM_EMAIL_PLACEHOLDER}
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Input
          label={REGISTER_FORM_PASSWORD}
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
        />
        <Form.Input
          label={REGISTER_FORM_CONFIRM_PASSWORD}
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={onChange}
        />
        <Button type="submit" primary>{REGISTER_FORM_BUTTON_TEXT}</Button>
      </Form>
      {(requestError) ? (<div className="ui error message">{requestError}</div>) : null}
      <Spinner active={loading} />
      <NewUserRegisteredModal
        isOpen={modalOpen}
        fullName={registeredUser.fullName}
        avatar={registeredUser.avatar}
        username={registeredUser.username}
        onClick={() => onConfirmRegistry()}
      />
    </>
  )
}
