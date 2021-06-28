import React, {useEffect} from "react";
import {Book} from "../atoms/Book";

export const LinesOfBooks = ({array}) => {
    console.log(array)

    // const ListItems = array.map(({text}) =>
    //     <li>
    //         {text}
    //     </li>
    // );
    // const array =[]

    useEffect(() => {
        // console.log(array)
    },[])

    return (
        <div>
            <div style={styles.block}>
                {array.map(({name}) =>
                    <div style={styles.li} key={name}>
                        <Book name={name}/>
                    </div>
                )
                }
            </div>
        </div>
    )
}

const styles = {
    block:{
        position:'relative',
        // width:400,
        color: "#000000",
        marginLeft: '20%',
        marginRight: '20%',
        backgroundColor:'#404040',
        borderRadius: 20,
    },

    li:{
        listStyleType:"none",
        padding:10,
        textDecoration: 'none',
        textAlign:'center',
    }


}