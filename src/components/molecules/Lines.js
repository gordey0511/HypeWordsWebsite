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

const Lines = ({array,id,updateSearch}) => {

    console.log(array)
    const [filter,setFilter] = useState("")


    const handleChange = event => {
        setFilter(event.target.value);
        updateSearch(event.target.value);
    };

    // const lowercasedFilter = filter.toLowerCase();
    // Object.values(array).filter(item => {
    //     return Object.keys(item).some(key =>
    //         typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
    //     );
    // });

    console.log(array);

    return (
        <div className={"middle_block_list"}>
            <div className={"center_block"}>
                <SearchField value={filter} onChange={handleChange} />
                {array.map(item => (
                    <div style={styles.li} key={item._id}>
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
                                id = {item._id}
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

const putDispatchToProps = dispatch => {
    return {
        updateSearch: bindActionCreators(getSearchBookResult,dispatch),
    }
}

export default connect(null,putDispatchToProps)(Lines);


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