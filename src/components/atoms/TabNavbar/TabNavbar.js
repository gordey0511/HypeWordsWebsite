import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from '../../../styles/button.css'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import { Tab } from '@material-ui/core'
import NavLink from 'react-bootstrap/NavLink'

const useStyles = makeStyles({
  button_navbar: {
    fontWeight: 600,
    fontSize: 18,
    minWidth: 120,
  },

  red_tab_navbar: {
    color: '#e65154 !important',
  },

  invested_div: {
    margin: 20,
    marginTop: 15,
    color: '#020707',
    textDecoration: 'none',
    fontSize: 22,
  },
})

const TabNavbar = ({ tab_text, current_text, link, handleClick }) => {
  const classes = useStyles()

  return link !== undefined && link !== '' ? (
    <Tab
      className={classnames(
        classes.button_navbar,
        tab_text === current_text && classes.red_tab_navbar
      )}
      component={Link}
      to={link}
      onClick={handleClick}
      label={tab_text}
    />
  ) : (
    <Tab
      className={classnames(
        classes.button_navbar,
        tab_text === current_text && classes.red_tab_navbar
      )}
      component={Typography}
      onClick={handleClick}
      label={tab_text}
    />
  )
}

export default withStyles(styles)(TabNavbar)
