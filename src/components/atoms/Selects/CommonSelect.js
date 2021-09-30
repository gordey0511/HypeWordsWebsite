import React, { useEffect } from 'react'
import { InputLabel, MenuItem, Select } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'

export const CommonSelect = ({ label, value, handleChange, array, styles, disabled = false }) => {
  useEffect(() => {
    console.log('ARRAY ' + array)
  }, [])

  return (
    <FormControl variant="outlined" style={styles}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label={label}
        disabled={disabled}
      >
        {array.map(({ text }) => (
          <MenuItem value={text}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
