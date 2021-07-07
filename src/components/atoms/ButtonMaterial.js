import React from "react";
import {Button} from "@material-ui/core";

export const ButtonMaterial = ({text, handleClick,color}) => {
    return (
        <Button
            variant="contained"
            color={color}
            className={"block_vertical"}
            onClick={handleClick}
        >
            {text}
        </Button>

    )
}