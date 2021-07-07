import React, {useEffect, useState} from "react";
import {BookOfList} from "../atoms/BookOfList";
import axios from 'axios';
import {SearchField} from "./SearchField";
import "../../styles/blocks.css"
import {LINES} from '../../utils/constants';
import {Author} from "../atoms/Author";
import {OutlinedCard} from "../atoms/OutlinedCard";
import {bindActionCreators} from "redux";
import {update_navbar} from "../../store/navbar/actions";
import {getAllAuthors} from "../../store/authors/actions";
import {ACTION_GET_SEARCH_RESULT_BOOK, getSearchBookResult} from "../../store/books/actions";
import {connect} from "react-redux";

export const LinesBooks = ({array}) => {

    console.log(array)

    return (
        // <div className={"middle_block_list"}>
            <div className={"center_block"}>
                {array.map(item => (
                    <div style={styles.li} key={item.id}>
                        <OutlinedCard
                            id={item.id}
                            link_text={"book"}
                            text={item.name}
                            // type={item.section[0]}
                            // author_id = {item.author_id}
                            // year={item.year_published}
                        />
                    </div>
                ))
                }
            </div>
        // </div>
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