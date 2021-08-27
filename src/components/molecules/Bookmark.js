import React from "react";
import "../../styles/text.css"
import {TextBookmark} from "../atoms/TextBookmark";


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
                                <TextBookmark handle={handleDelete}/>
                                :
                                <TextBookmark handle={handleAdd}/>
                        }

                    </div>
                    :
                    null
            }

        </div>
    )
}