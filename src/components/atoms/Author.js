import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AuthorAPI} from "../../services/AuthorApi";

export const Author = ({name,index=0}) => {

    useEffect(() => {
        console.log(name)
    },[])

    return (
        <div>
            <Link style={styles.text} to={`/author/${index}`}>{name}</Link>
        </div>
    )
}

const styles = {
    box:{
        position:'relative',
        margin:10,
        fontStyle: 'italic',
        color: 'gray',
        display:'flex',
        flexDirection:'row',

        // backgroundColor:'gray',
    },

    img:{
        display:'inline-block',
        weight:40,
        height:40,
        right:50,
        marginRight:20,
        borderRadius:'50%',
    },

    text:{
        display:'flex',
        flexDirection:'row',
        color: '#cecccc',
        alignItems:'center',
        verticalAlign:'middle',
        textDecoration:'none',
    }
}

