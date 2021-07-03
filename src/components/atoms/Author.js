import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AuthorAPI} from "../../services/AuthorApi";

export const Author = ({name,index=0}) => {

    useEffect(() => {
        // console.log(name)
    },[])

    return (
        <div>
            <Link style={styles.name} to={`/author/${index}`}>{name}</Link>
        </div>
    )
}

const styles = {
    name:{
        textDecoration: 'none',
        color:"#fd0404",
        fontSize:25,
    }
}

