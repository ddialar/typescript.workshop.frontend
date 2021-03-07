import { SingleFormValue } from '@types'
import { FC, FormEvent, SyntheticEvent, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface Props {
  title: string
  placeholder?: string
  error: string | null
  onSubmit: (fieldContent: SingleFormValue['fieldContent']) => Promise<void>
}

const initialFormValues: SingleFormValue = {
  fieldContent: ''
}

export const SingleFieldForm: FC<Props> = ({ title, placeholder, error = null, onSubmit }) => {
  const [values, setValues] = useState(initialFormValues)

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const _onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await onSubmit(values.fieldContent)
    setValues(initialFormValues)
  }

  return (
    <>
      <Form onSubmit={_onSubmit}>
        <h2>{title}</h2>
        <Form.Field>
          <Form.Input
            placeholder={placeholder}
            name="fieldContent"
            error={error}
            onChange={onChange}
            value={values.fieldContent}
          />
          <Button
            type="submit"
            color="teal"
          >
            Submit
          </Button>
        </Form.Field>
      </Form>
    </>
  )
}
