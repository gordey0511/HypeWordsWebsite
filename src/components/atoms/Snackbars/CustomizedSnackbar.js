import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const CustomizedSnackbar = ({
    open,
    handleClose
                                            }) =>
{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
            {/*<Alert severity="error">This is an error message!</Alert>*/}
            {/*<Alert severity="warning">This is a warning message!</Alert>*/}
            {/*<Alert severity="info">This is an information message!</Alert>*/}
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </div>
    );
}
