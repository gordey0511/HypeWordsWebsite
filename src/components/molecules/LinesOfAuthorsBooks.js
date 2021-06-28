import React from "react";
import {Book} from "../atoms/Book";

export const LinesOfAuthorsBooks = ({array}) => {


    return(
        <div>
            <ul style={styles.ul}>
                {array.map(({name}) =>
                    <li style={styles.li} key={name}>
                        <Book name={name}/>
                    </li>
                )
                }
            </ul>
        </div>
    )
}


const styles={
    li:{
        textDecoration:'none',
        textAlign:'left',
        listStyleType:'none',
        justifyContent:'center',
    },

    ul:{
        // width:200,
        // display:'flex',
        marginLeft:0,
        paddingLeft:0,
        paddingTop:0,
        padding:0,
        marginTop:20,
    }
}


