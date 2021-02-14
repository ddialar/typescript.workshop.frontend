import { FC, FormEvent, SyntheticEvent, useState } from 'react'
import { createNewPost } from '@dataSources'
import { BasicPost } from '@types'
import { Button, Form } from 'semantic-ui-react'

const initialValues = {
  postBody: ''
}

interface Props {
    token: string,
    addNewPost: (newPost: BasicPost) => void
    setError: (error: string | null) => void
}

export const PostForm: FC<Props> = ({ token, addNewPost, setError }) => {
  const [values, setValues] = useState(initialValues)

  const onChange = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    // TODO Create the new post.
    console.log('Creating new post with next data:\n', JSON.stringify(values, null, 4))

    // await createNewPost(values.postBody, token)
    const result = await createNewPost(values.postBody, token)

    if ('error' in result) {
      setError(result.message)
    } else {
      setValues({ postBody: '' })
      setError(null)
      addNewPost(result)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a post:</h2>
      <Form.Field>
        <Form.Input
          placeholder="Hi world!"
          name="postBody"
          onChange={onChange}
          value={values.postBody}
        />
        <Button
          type="submit"
          color="teal"
        >
          Submit
        </Button>
      </Form.Field>
    </Form>
  )
}
