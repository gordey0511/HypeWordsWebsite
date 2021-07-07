import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from "@material-ui/core";
import {FiFilter} from "react-icons/all";
const useStyles = makeStyles((theme) => ({
    root: {
        width:"100%",
        // '& > *': {
        //     margin: theme.spacing(1),
        //     width: '80ch',
        // },
    },

    icon:{
        width:"5%",
    },

    text_field:{
        width:"95%",
    },
}));

export const InputField = ({value,onChange,onClickEvent}) => {
    const classes = useStyles();

    return(
        <Grid className={classes.root} container spacing={1} alignItems="flex-end">
            <Grid item className={classes.icon}>
                <SearchIcon />
            </Grid>
            <Grid item className={classes.text_field} >
                <TextField className={classes.root} id="standard-basic" label="Поиск" value={value} onChange={onChange}/>
            </Grid>
        </Grid>

    // <form className={classes.root} noValidate autoComplete="off">
    //         <TextField />
    //     </form>
    );
}