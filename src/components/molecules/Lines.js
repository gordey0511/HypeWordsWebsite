import React, {useEffect, useState} from "react";
import {BookOfList} from "../atoms/BookOfList";
import axios from 'axios';
import {SearchField} from "./SearchField";
import "../../styles/blocks.css"
import {LINES} from '../../utils/constants';
import {Author} from "../atoms/Author";
import {OutlinedCard} from "../atoms/OutlinedCard";

export const Lines = ({array,id}) => {

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
        <div className={"middle_block_list"}>
            <div className={"center_block"}>
                <SearchField value={filter} onChange={handleChange} />
                {filteredData.map(item => (
                    <div style={styles.li} key={item.name}>
                        {(id === LINES.books) ?
                            <OutlinedCard
                                id={item._id}
                                link_text={"book"}
                                text={item.name}
                                type={item.section[0]}
                                // author_id = {item.author_id}
                                year={item.year_published}
                            />
                            :
                            <OutlinedCard
                                id={item._id}
                                link_text={"author"}
                                text={item.name}
                                type={item.section}
                                year={item.date_of_live}
                            />
                        }
                    </div>
                ))
                }
            </div>
        </div>
    )
}


const styles = {
    block:{
        position:'relative',
        color: "#000000",
        marginLeft: '20%',
        marginRight: '20%',
        backgroundColor:'#404040',
        borderRadius: 20,
    },

    li:{
        display: 'inline-block',
        listStyleType:"none",
        padding:10,
        textDecoration: 'none',
        textAlign:'center',
    }


}