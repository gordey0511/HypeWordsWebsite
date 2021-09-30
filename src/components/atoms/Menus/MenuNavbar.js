import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export const MenuNavbar = ({ handleClick, openMenu, arrayButtons }) => {
  return (
    <Menu
      id="fade-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={openMenu}
      keepMounted
      open={Boolean(openMenu)}
      onClose={handleClick}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {arrayButtons.map(({ text, link, icon }) => (
        <Link
          style={{
            textDecoration: 'none',
            color: '#000000',
          }}
          to={link}
        >
          <MenuItem
            onClick={handleClick}
            style={{
              margin: 5,
            }}
          >
            {icon}
            <div
              style={{
                marginLeft: 20,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              {text}
            </div>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  )
}
