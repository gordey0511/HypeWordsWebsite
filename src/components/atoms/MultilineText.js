import React from "react";
import {TextField} from "@material-ui/core";

export const MultilineText = ({text,changeText}) => {
    return (
        <TextField
            style={{width:650}}
            id="outlined-multiline-static"
            multiline
            rows={25}
            defaultValue="Default Value"
            variant="outlined"
            label={"Введите ваш текст"}
            value={text}
            onChange={changeText}
        >
            </TextField>

    )
}