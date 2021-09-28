import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import '../../../styles/margins.css'
import {makeStyles} from "@material-ui/styles";
import {Chip} from "@material-ui/core";

export const TextInputChip = ({
                                      label,
                                      setLabel,
                                      value,
                                      helperText,
                                      onKeyDown,
                                      changeValue,
                                      type =  "text",
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
            type={type}
            onKeyDown={onKeyDown}
            variant="outlined"
            disabled={disabled}
            className={"margin_small"}
            onChange={changeValue}
            helperText={helperText}
        >

            <Chip
                label="Clickable Deleteable"
                // onClick={handleClick}
                // onDelete={handleDelete}
            />
        </TextField>

    )
}