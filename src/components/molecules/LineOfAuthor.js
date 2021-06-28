import React, {useEffect} from "react";
import {Author} from "../atoms/Author";

export const LineOfAuthor = () => {
    // console.log(array)
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
            {/*<ul style={styles.block}>*/}
            {/*    {array.map(({surname}) =>*/}
            {/*        <li style={styles.li} key={surname}>*/}
            {/*            <Author name={surname}/>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    )
}

const styles = {
    block:{
        position:'relative',
        width:400,
        color: "#000000",
        backgroundColor:'#404040',
        borderRadius: 20,
        paddingLeft: 0,
        textAlign: 'left'
    },

    li:{
        listStyleType:"none",
        padding:10,
        textDecoration:'none',
        textAlign:'left'
    }


}