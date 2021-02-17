import { FC, FormEvent, SyntheticEvent, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

import {
  REGISTER_FORM_TITLE,
  REGISTER_FORM_BUTTON_TEXT,
  REGISTER_FORM_NAME,
  REGISTER_FORM_NAME_PLACEHOLDER,
  REGISTER_FORM_SURNAME,
  REGISTER_FORM_SURNAME_PLACEHOLDER,
  REGISTER_FORM_USERNAME,
  REGISTER_FORM_USERNAME_PLACEHOLDER,
  REGISTER_FORM_PASSWORD,
  REGISTER_FORM_CONFIRM_PASSWORD,
  REGISTER_FORM_AVATAR
} from './registerForm.constants'

const initialValues = {
  name: '',
  surname: '',
  avatar: '',
  username: '',
  password: '',
  confirmPassword: ''
}

export const RegisterForm: FC = () => {
  const [values, setValues] = useState(initialValues)

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    // TODO Register the user
  }
  return (
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
        label={REGISTER_FORM_USERNAME}
        placeholder={REGISTER_FORM_USERNAME_PLACEHOLDER}
        name="username"
        type="email"
        value={values.username}
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
        name="password"
        type="password"
        value={values.confirmPassword}
        onChange={onChange}
      />
      <Button type="submit" primary>{REGISTER_FORM_BUTTON_TEXT}</Button>
    </Form>
  )
}
