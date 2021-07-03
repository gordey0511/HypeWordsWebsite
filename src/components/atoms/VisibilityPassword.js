import React from "react";
import {Fab} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export const VisibilityPassword = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*<Fab color="" aria-label="add">*/}
                <VisibilityIcon />
            {/*</Fab>*/}
        </div>
    )
}