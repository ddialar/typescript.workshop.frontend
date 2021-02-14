import React, { FC } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

interface Props {
  active: boolean
  text?: string
}

export const Spinner: FC<Props> = ({ active = false, text = 'Loading' }) => (
  <Dimmer active={active} inverted>
    <Loader inverted>{text}</Loader>
  </Dimmer>
)
