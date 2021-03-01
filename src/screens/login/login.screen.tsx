import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { FormWrapper, LoginForm } from '@components'
import { HOME_PATH } from '@common'

export const LoginScreen: FC<RouteComponentProps> = ({ history }) => <FormWrapper><LoginForm callback={() => history.push(HOME_PATH)} /></FormWrapper>
