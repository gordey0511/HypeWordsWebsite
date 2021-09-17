import React from "react";
import {Snackbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const CommonSnackbar = ({
    open,
    text,
    handleClose,

                               }) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={text}
                action={
                    <React.Fragment>
                        {/*<Button color="secondary" size="small" onClick={handleClose}>*/}
                        {/*    UNDO*/}
                        {/*</Button>*/}
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />

        </div>
    )
}