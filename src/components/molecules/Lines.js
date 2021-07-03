import React, {useEffect, useState} from "react";
import {BookOfList} from "../atoms/BookOfList";
import axios from 'axios';
import {SearchField} from "./SearchField";
import "../../styles/blocks.css"
import {LINES} from '../../utils/constants';
import {Author} from "../atoms/Author";
import {OutlinedCard} from "../atoms/OutlinedCard";

export const Lines = ({array,id}) => {
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

    const Layout = ({name}) => {
        if(id === LINES.books){
            return (
                <OutlinedCard text={name} type={"Проза"} year={"1893"}/>
            );
        }else if(id === LINES.authors){
            return (
                <OutlinedCard name={name} type={"Русская классика"} year={"1880"}/>
            );
        }
    }

    return (
        <div className={"middle_block_list"}>
            <div className={"center_block"}>
                <SearchField value={filter} onChange={handleChange} />
                {filteredData.map(item => (
                    <div style={styles.li} key={item.name}>
                        <Layout name={item.name}/>
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