import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'

export const CheckBox = ({ label, checked, handleChange, color = 'primary', styles }) => {
  return (
    <FormControlLabel
      style={styles}
      control={<Checkbox checked={checked} onChange={handleChange} color={color} />}
      label={label}
    />
  )
}
