import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const DialogNewLesson = ({ open, title, text, handleClose }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{text}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Скопировать
        </Button>
      </DialogActions>
    </Dialog>
  )
}
