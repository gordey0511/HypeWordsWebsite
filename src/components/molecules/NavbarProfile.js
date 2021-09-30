import React from 'react'
import TabNavbar from '../atoms/TabNavbar/TabNavbar'
import { NAVBAR_TITLE } from '../../utils/constants'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Button from '@material-ui/core/Button'

export const NavbarProfile = ({ token, current_text, handleProfile, name }) => {
  return token === null || token === undefined || token === '' ? (
    <TabNavbar tab_text={NAVBAR_TITLE.Login} current_text={current_text} link={'/login'} />
  ) : (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
      }}
      onClick={handleProfile}
    >
      <TabNavbar tab_text={name} current_text={current_text} link={undefined} />
      <ArrowDropDownIcon
        style={{
          display: 'flex',
          justifyContent: 'center',
          verticalAlign: 'center',
          flexDirection: 'column',
          marginTop: 25,
          marginLeft: -15,
        }}
      />
    </div>
  )
}
