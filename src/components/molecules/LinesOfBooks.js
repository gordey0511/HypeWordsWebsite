import React, {useEffect} from "react";
import {BookOfList} from "../atoms/BookOfList";

export const LinesOfBooks = ({array}) => {
    useEffect(() => {
        // console.log(array)
    },[])

    return (
        <div>
            <div style={styles.block}>
                {
                    array.map(({name}) =>
                        <div style={styles.li} key={name}>
                            <BookOfList name={name}/>
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