import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    textDecoration: 'none',
  },

  link: {
    textDecoration: 'none',
  },
})

export const LinkButton = ({ link, text, color = 'primary' }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={link}>
      <Button variant={'contained'} color={color} className={classes.button}>
        {text}
      </Button>
    </Link>
  )
}
