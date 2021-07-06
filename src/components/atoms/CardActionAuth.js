import React from "react";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const CardActionAuth = ({link,text}) => {
    return (
        <CardActions>
            <Link className={"unlink_text"} to={link}>
                <Button
                    size="small">
                    {text}
                </Button>
            </Link>
        </CardActions>
    )
}