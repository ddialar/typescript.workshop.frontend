import React, { FC } from 'react'

import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import { Container } from 'semantic-ui-react'
import { RouterConfig } from '@navigation'
import { MenuBar } from '@components'
import { AppContextProvider } from '@context'

export const App: FC = () => {
  return (
    <Container>
      <AppContextProvider>
        <BrowserRouter>
          <MenuBar />
          <RouterConfig />
        </BrowserRouter>
      </AppContextProvider>
    </Container>
  )
}
