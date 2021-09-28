import React from "react";
import Button from "@material-ui/core/Button";

export const ButtonMaterial = ({text, handleClick,color, styles = null}) => {
    return (
        <Button
            // startIcon={<DeleteIcon/>}
            style={styles}
            variant="outlined"
            color={color}
            // className={"block_vertical"}
            onClick={handleClick}
            // endIcon={SendIcon}
        >
            {text}
        </Button>

    )
}