import React, { useState } from 'react'
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import { VisibilityPassword } from './TypePassword/VisibilityPassword'
import { UnVisibilityPassword } from './TypePassword/UnVisibilityPassword'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}))

export const FormPassword = () => {
  const classes = useStyles()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChangePassword = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }
  const handleChangeShowPassword = (event) => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Пароль2</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChangePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleChangeShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityPassword /> : <UnVisibilityPassword />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  )
}
