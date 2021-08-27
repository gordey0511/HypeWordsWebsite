import React from "react";
import TextField from "@material-ui/core/TextField";
import '../../../styles/margins.css'
import {makeStyles} from "@material-ui/styles";

export const MultilineTextInput = ({
                                       label,
                                       helperText,
                                       value,
                                       changeValue,
                                       rows,
                                       styles = null}) => {
    return (
        <TextField
            style={styles}
            value={value}
            id="outlined-basic"
            label={label}
            multiline
            rows = {rows}
            variant="outlined"
            className={"margin_small"}
            onChange={changeValue}
            helperText={helperText}
        />

    )
}