import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { HOME_PATH, LOGIN_PATH, REGISTER_PATH, POSTS_PATH } from './routerConfig.constants'
import { HomeScreen, SinglePostScreen, LoginScreen, RegisterScreen } from '@screens'

export const RouterConfig: FC = () => (
  <Switch>
    <Route exact path={HOME_PATH} component={HomeScreen} />
    <Route exact path={`${POSTS_PATH}/:postId`} component={SinglePostScreen} />
    <Route exact path={LOGIN_PATH} component={LoginScreen} />
    <Route exact path={REGISTER_PATH} component={RegisterScreen} />
    <Route path="*" render={() => (<Redirect to={HOME_PATH} />)} />
  </Switch>
)
