import React from "react";

const LinesOfAuthorsBooks = ({array}) => {


    return(
        <div>
            <ul>
                {array.map(({name}) => {
                    <Book name={name}></Book>
                })
                }
            </ul>
        </div>
    )
}