import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        width:"100%",
        // '& > *': {
        //     margin: theme.spacing(1),
        //     width: '80ch',
        // },
    },

    icon:{
        marginBottom:10,

        // width:"10%",
        // height: "auto",
    },

    text_field:{
        width:"90%",
    },

    resize:{
        // fontSize:28,
    }
}));

export const InputField = ({value,onChange,onClickEvent}) => {
    const classes = useStyles();

    return(
        <Grid className={classes.root} container spacing={1} alignItems="flex-end">
            <Grid item className={classes.icon}>
                <SearchIcon className={"slider_img"}/>
            </Grid>
            <Grid item className={classes.text_field} >
                <TextField
                    className={classes.root}
                    id="standard-basic"
                    label="Название книги"
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    margin="normal"
                    value={value}
                    onChange={onChange}
                    // variant={"outlined"}
                />
            </Grid>
        </Grid>

    // <form className={classes.root} noValidate autoComplete="off">
    //         <TextsInput />
    //     </form>
    );
}


const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
//style for font size
    resize:{
        fontSize:50
    },
}