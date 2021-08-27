import React from "react";
import Typography from "@material-ui/core/Typography";

export const Body = ({
    text,
    body = "h5",
    size = 25,
    color="#000000",
                         }) => {
    return (
        <div>
            <Typography
                variant={body}
                style={{
                    display: "flex",
                    // fontSize: size,
                    color: color,
                }}
            >
                {text}
            </Typography>
        </div>
    )
}