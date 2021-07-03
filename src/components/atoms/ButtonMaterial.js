import React from "react";
import {Button} from "@material-ui/core";

export const ButtonMaterial = ({text}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            className={"block_vertical"}
        >
            {text}
        </Button>

    )
}