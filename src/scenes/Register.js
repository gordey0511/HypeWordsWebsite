import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../styles/blocks.css'
import {Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel} from "@material-ui/core";
import {VisibilityPassword} from "../components/atoms/VisibilityPassword";
import {UnVisibilityPassword} from "../components/atoms/UnVisibilityPassword";
import {FormPassword} from "../components/atoms/FormPassword";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '80ch',
        },
    },
}));

export const Register = () => {

    return (
        <div className={"center_block_login"}>
            <div className={"vertical_blocks"}>
                <FormPassword/>
            </div>
        </div>
    )
}








