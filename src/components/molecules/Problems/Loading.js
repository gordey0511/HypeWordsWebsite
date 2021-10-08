import React from 'react'
import { CircularProgress } from '@mui/material'

export const Loading = ({ style }) => {
  return (
    <div style={style}>
      <CircularProgress />
    </div>
  )
}
