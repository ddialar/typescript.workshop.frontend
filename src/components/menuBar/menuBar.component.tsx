import { FC, useState, useEffect, useContext, MouseEvent } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { HOME_MENU_TAG, LOGIN_MENU_TAG, LOGOUT_MENU_TAG, REGISTER_MENU_TAG } from './menuBar.constants'
import { Spinner } from '@components'
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '@common'
import { logout } from '@dataSources'
import { AppContext } from '@context'

export const MenuBar: FC = () => {
  const { user, removeUserData } = useContext(AppContext)
  const [activeItem, setActiveItem] = useState(HOME_PATH)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const { pathname } = window.location
    const path = pathname === '/' ? HOME_MENU_TAG : pathname.substr(1)
    setActiveItem(path)
  }, [])

  const handleItemClick = (event: MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => setActiveItem(data.name || HOME_MENU_TAG)

  const handleLogout = async (token: string) => {
    setLoading(true)
    await logout(token)

    removeUserData()
    setLoading(false)
  }

  return user
    ? (
      <>
        <Menu pointing secondary size="massive" color="teal">
          <Menu.Item
            name={HOME_MENU_TAG}
            active
            as={Link}
            to={HOME_PATH}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name={LOGOUT_MENU_TAG}
              onClick={() => handleLogout(user.token)}
              as={Link}
              to={HOME_PATH}
            />
          </Menu.Menu>
        </Menu>
        <Spinner active={loading} text="Logging out..." />
      </>
    )
    : (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name={HOME_MENU_TAG}
          active={activeItem === HOME_MENU_TAG}
          onClick={handleItemClick}
          as={Link}
          to={HOME_PATH}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name={LOGIN_MENU_TAG}
            active={activeItem === LOGIN_MENU_TAG}
            onClick={handleItemClick}
            as={Link}
            to={LOGIN_PATH}
          />
          <Menu.Item
            name={REGISTER_MENU_TAG}
            active={activeItem === REGISTER_MENU_TAG}
            onClick={handleItemClick}
            as={Link}
            to={REGISTER_PATH}
          />
        </Menu.Menu>
      </Menu>
    )
}
