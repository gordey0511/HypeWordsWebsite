import React from "react";
import Button from "@material-ui/core/Button";
import {Icon} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

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