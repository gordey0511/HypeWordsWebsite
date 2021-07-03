import React from "react";
import TextField from "@material-ui/core/TextField";
import '../../styles/margins.css'

export const TextFieldMaterial = ({label}) => {
    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            className={"margin_small"}
        />

    )
}