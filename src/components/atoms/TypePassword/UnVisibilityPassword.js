import React from 'react'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export const UnVisibilityPassword = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <VisibilityOffIcon />
    </div>
  )
}
