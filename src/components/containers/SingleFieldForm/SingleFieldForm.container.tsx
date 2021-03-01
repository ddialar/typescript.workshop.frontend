import { SingleFormValue } from '@types'
import { FC, FormEvent, SyntheticEvent, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface Props {
  title: string
  placeholder?: string
  onSubmit: (fieldContent: SingleFormValue['fieldContent']) => Promise<void>
}

const initialFormValues: SingleFormValue = {
  fieldContent: ''
}

export const SingleFieldForm: FC<Props> = ({ title, placeholder, onSubmit }) => {
  const [values, setValues] = useState(initialFormValues)
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const _onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (values.fieldContent !== '') {
      await onSubmit(values.fieldContent)
      setFormErrorMessage(null)
      setValues(initialFormValues)
    } else {
      setFormErrorMessage('Field format error')
    }
  }

  return (
    <>
      <Form onSubmit={_onSubmit}>
        <h2>{title}</h2>
        <Form.Field>
          <Form.Input
            placeholder={placeholder}
            name="fieldContent"
            onChange={onChange}
            value={values.fieldContent}
            error={formErrorMessage}
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
