import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Bookmark} from "../atoms/Bookmark";

export const ButtonBookPage = ({
                                   token,
                                   userToken,
                                   isFavorite,
                                   handleDelete,
                                   handleAdd,
                               }) => {
    return (
        <div className={"button_div"}>
            <Link className={"unlink_text"}  to={`/book/text/${token}`}>
                <Button
                    variant="contained"
                    color={"primary"}
                    className={"button_read"}
                >
                    Читать
                </Button>
            </Link>
            <Bookmark
                userToken={userToken}
                isFavorite={isFavorite}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
            />
        </div>

    )
}