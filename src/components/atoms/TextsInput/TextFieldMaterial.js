import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import '../../../styles/margins.css'
import {makeStyles} from "@material-ui/styles";

export const TextFieldMaterial = ({
                                      label,
                                      setLabel,
                                      value,
                                      helperText,
                                      changeValue,
                                      disabled = false,
                                      styles = null
}) => {
    const classes = makeStyles(styles)

    useEffect(() => {
        if (disabled) {
            // setLabel("")
        }
    },[disabled])

    return (
        <TextField
            classes={classes}
            value={value}
            style={styles}
            id="outlined-size-normal"
            label={label}
            variant="outlined"
            disabled={disabled}
            className={"margin_small"}
            onChange={changeValue}
            helperText={helperText}
        />

    )
}