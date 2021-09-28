import React from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const CommonDialog = ({
    open,
    title,
    text,
    handleClose,
    buttons

                             }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div dangerouslySetInnerHTML={{__html: `${text}`}}>

                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    buttons.map(({text,handleClick}) => (
                        <Button
                            onClick={handleClick}
                            color="primary"
                        >
                            {text}
                        </Button>
                    )
                    )
                }
            </DialogActions>
        </Dialog>

    )
}