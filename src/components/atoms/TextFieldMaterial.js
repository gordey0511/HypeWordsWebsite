import React from "react";
import TextField from "@material-ui/core/TextField";
import '../../styles/margins.css'

export const TextFieldMaterial = ({label,value,changeValue}) => {
    return (
        <TextField
            value={value}
            id="outlined-basic"
            label={label}
            variant="outlined"
            className={"margin_small"}
            onChange={changeValue}
        />

    )
}