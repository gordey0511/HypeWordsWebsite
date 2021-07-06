import React from "react";
import {Button} from "@material-ui/core";

export const ButtonMaterial = ({text, handleClick}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            className={"block_vertical"}
            onClick={handleClick}
        >
            {text}
        </Button>

    )
}