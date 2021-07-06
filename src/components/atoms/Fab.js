import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Edit} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export const Fab = ({text}) => {
    const classes = useStyles();

    return (
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <Edit className={classes.extendedIcon} />
            {text}
        </Fab>
    )
}