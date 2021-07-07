import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "../../styles/text.css"


export const Bookmark = (
    {
    userToken,
    isFavorite,
    handleDelete,
    handleAdd}
) => {
    return (
        <div>
            {
                (userToken!=="")?
                    <div className={"book_div_bookmark"}>
                        {
                            (isFavorite)?
                                <div className={"book_bookmark"} onClick={handleDelete}>
                                    <BookmarkIcon className={"book_bookmark_img"}/>
                                    <div className={"book_bookmark_text"}>
                                        В избранном
                                    </div>
                                </div>
                                :
                                <div className={"book_bookmark"} onClick={handleAdd}>
                                    <BookmarkBorderIcon className={"book_bookmark_img"}/>
                                    <div className={"book_bookmark_text"}>
                                        В избранное
                                    </div>
                                </div>
                        }

                    </div>
                    :
                    <div></div>
            }

        </div>
    )
}