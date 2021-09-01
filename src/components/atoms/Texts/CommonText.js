import React from "react";
import Typography from "@material-ui/core/Typography";

export const CommonText = ({
    text,
    body = "h5",
    size = 25,
    color="#000000",
    weight = 500,
    styles
                         }) => {
    return (
        <div>
            <Typography
                variant={body}
                style={
                        {
                        display: "flex",
                        fontSize: size,
                        color: color,
                        fontWeight: weight,
                        textAlign:'left',
                        ...styles,
                    }
                    }
            >
                {text}
            </Typography>
        </div>
    )
}