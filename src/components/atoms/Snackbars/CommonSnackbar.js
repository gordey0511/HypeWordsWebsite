import React from "react";
import {Snackbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Alert} from "@mui/lab";

export const CommonSnackbar = ({
    open,
    text,
    handleClose,
    severity="default",
    time = 3000,

                               }) => {
    return (
        (severity!=="default")?
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={time}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {text}
                </Alert>
            </Snackbar>
            :
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={time}
                onClose={handleClose}
                message={text}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            >
            </Snackbar>
    )
}