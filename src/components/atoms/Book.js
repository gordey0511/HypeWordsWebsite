import React from "react";

export const Book = ({name}) => {
    return(
        <div>
            <text style = {styles.name}>
                {name}
            </text>
        </div>
    )
}


const styles = {
    name:{
        color:"#fd0404",
        fontSize:25,
    }
}