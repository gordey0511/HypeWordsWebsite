import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const DialogNewLesson = ({
    open,
    token,
    handleClose,
                                }) => {
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Modal title
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Урок опубликован!
                </Typography>
                <Typography gutterBottom>
                    Ссылка на урок {token}
                </Typography>
                <Typography gutterBottom>
                    Отправьте её ученикам
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Скопировать
                </Button>
            </DialogActions>
        </Dialog>

    )
}