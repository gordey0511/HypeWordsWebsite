import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "../../styles/text.css"

export const TextBookmark = ({handle}) => {
    return (
        <div className={"book_bookmark"} onClick={handle}>
            <BookmarkIcon className={"book_bookmark_img"}/>
            <div className={"book_bookmark_text"}>
                В избранном
            </div>
        </div>
    )
}