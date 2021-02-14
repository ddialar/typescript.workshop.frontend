import React, { FC } from 'react'
import { Grid } from 'semantic-ui-react'

interface Props {
  message?: string
}

export const ErrorComponent: FC<Props> = ({ message = 'Oops! There was an error.' }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column textAlign="center" color="red">
        <h1>{message}</h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
