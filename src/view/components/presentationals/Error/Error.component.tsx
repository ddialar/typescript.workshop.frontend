import { FC } from 'react'
// import { Grid } from 'semantic-ui-react'

interface Props {
  message?: string
}

export const ErrorComponent: FC<Props> = ({ message = 'Oops! There was an error.' }) =>
  <div className="ui error message">{message}</div>
