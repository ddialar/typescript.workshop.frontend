import { FC, FormEvent, SyntheticEvent, useState, useContext } from 'react'
import { Form, Button } from 'semantic-ui-react'

import { AppContext } from '@context'
import { login } from '@dataSources'
import { Spinner } from '@components'

import {
  LOGIN_FORM_TITLE,
  LOGIN_FORM_BUTTON_TEXT,
  LOGIN_FORM_USERNAME,
  LOGIN_FORM_USERNAME_PLACEHOLDER,
  LOGIN_FORM_PASSWORD
} from './LoginForm.constants'
import { ApiError, AuthenticatedUser } from '@types'

// REFACTOR Remove these presets
const initialValues = {
  username: 'trenton.kutch@mail.com',
  password: '123456'
}

interface Props {
  callback: () => void
}

export const LoginForm: FC<Props> = ({ callback }) => {
  const [values, setValues] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  const [requestError, setRequestError] = useState<string | null>(null)
  const { setUserData, removeUserData } = useContext(AppContext)

  const processLoginSuccess = ({ token, username }: AuthenticatedUser) => {
    setUserData({ token, username })
    callback()
  }

  const processLoginError = ({ message }: ApiError) => {
    setRequestError(message)
    removeUserData()
  }

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    setLoading(true)
    const result = await login(values)
    setLoading(false)

    if ('error' in result) {
      processLoginError(result)
    } else {
      processLoginSuccess(result)
    }
  }

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate>
        <h1>{LOGIN_FORM_TITLE}</h1>
        <Form.Input
          label={LOGIN_FORM_USERNAME}
          placeholder={LOGIN_FORM_USERNAME_PLACEHOLDER}
          name="username"
          type="email"
          value={values.username}
          onChange={onChange}
        />
        <Form.Input
          label={LOGIN_FORM_PASSWORD}
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
        />
        <Button type="submit" primary>{LOGIN_FORM_BUTTON_TEXT}</Button>
      </Form>
      {(requestError) ? (<div className="ui error message">{requestError}</div>) : null}
      <Spinner active={loading} />
    </div>
  )
}
