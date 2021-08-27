import React, {useEffect} from "react";
import Post from "../molecules/Post"
import "../../styles/blocks.css"

export const ListPosts = ({array}) => {

    useEffect(() =>{
        console.log(array);
    },[array])

    return (
        <div className={"middle_block_list"}>
            <div className={"center_block"} id={"field"}>

                    {
                        array.map(({title,
                                   authorName,
                                   likes,
                                   _id,
                                   text,
                                   author_id,
                                   short_text,
                        }) => (
                            // <div className={"center_block"}>
                            <div
                                style={{
                                    justifyContent: "center",
                                    textAlign: "center",
                                    padding: 10,
                                }}
                            >
                                <Post title = {title}
                                      id = {_id}
                                      text = {text[0].arg}
                                      short_text = {short_text}
                                      author_id = {author_id}
                                      authorName = {authorName}
                                      likes = {likes}
                                />
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}