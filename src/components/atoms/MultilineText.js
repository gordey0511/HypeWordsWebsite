import React from 'react'
import { TextField } from '@material-ui/core'

export const MultilineText = ({ text, changeText }) => {
  return (
    <TextField
      style={{ width: 850 }}
      id="outlined-multiline-static"
      multiline
      rows={40}
      defaultValue="Default Value"
      variant="outlined"
      label={'Введите ваш текст'}
      value={text}
      onChange={changeText}
    ></TextField>
  )
}
