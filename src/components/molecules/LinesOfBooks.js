import React, {useEffect, useState} from "react";
import {BookOfList} from "../atoms/BookOfList";
import axios from 'axios';

let filter = "";

export const LinesOfBooks = ({array}) => {
    useEffect(() => {

    },[])

    const [filter,setFilter] = useState("")
    const handleChange = event => {
        setFilter(event.target.value );
    };

    const lowercasedFilter = filter.toLowerCase();
    const filteredData = array.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
        );
    });

    return (
        <div>
            <div style={styles.block}>
                <input value={filter} onChange={handleChange} />
                {filteredData.map(item => (
                    <div style={styles.li} key={item.name}>
                        <BookOfList name={item.name}/>
                    </div>
                ))
                }
            </div>z
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