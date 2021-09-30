import React from 'react'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

export const SimpleTooltip = ({ text, children }) => {
  return (
    <div>
      <Tooltip title={text}>{children}</Tooltip>
    </div>
  )
}
