import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Chip} from "@material-ui/core";

export const CommonChip = ({
    text,
    style,
    onDelete,
    index,
                           }) => {
    return (
        <Chip
            variant="outlined"
            color="primary"
            style={style}
            label={text}
            onDelete={() => onDelete(index)}
        />
    )
}