import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { LoginForm } from '@components'
import { SingleForm } from '@layouts'
import { HOME_PATH } from '@common'

export const LoginScreen: FC<RouteComponentProps> = ({ history }) => <SingleForm><LoginForm callback={() => history.push(HOME_PATH)} /></SingleForm>
