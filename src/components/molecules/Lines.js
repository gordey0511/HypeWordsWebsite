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
import {ACTION_GET_SEARCH_RESULT_BOOK, getSearchBookResult, getUpdateSearchBookResult} from "../../store/books/actions";
import {connect} from "react-redux";
import {DropDownSeacrh} from "../atoms/DropDownSearch";

let filter = "";
let curId = 1;
let type = "Все";

const Lines = ({
                   array,
                   id,
                   updateSearch,
                   updateSearchField
}) => {

    const [valueSlider, setValueSlider] = React.useState([1700, 2021]);

    const handleChangeSlider = (event, newValue) => {
        setValueSlider(newValue);
        console.log("handleChangeSlider "+valueSlider[0]+" "+valueSlider[1]);
        updateSearchFields()
    };

    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener("scroll", trackScrolling);
        }
    },[])

    const handleChange = event => {
        filter = event.target.value;
        curId = 1;
        console.log(curId);
        updateSearch(filter,valueSlider[0],valueSlider[1],type);
    };

    const handleClick = event => {
        console.log("handleClick");
    };

    const isBottom = (el) => {
        // console.log(el.getBoundingClientRect().bottom + " " + window.innerHeight)
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    const trackScrolling = () => {
        const wrappedElement = document.getElementById('field');
        if (isBottom(wrappedElement)) {
            // console.log('header bottom reached');
            console.log("!"+curId + " ! " + filter + " ! " + type)
            updateSearchField(filter,curId+1,valueSlider[0],valueSlider[1],type)
            // setCurId(curId+1);
            curId = curId+1;
        }
    }

    const handleChangeFilterType = (event) => {
        // setCurId(1);
        // setType(event.target.value);
        curId = 1;
        type = event.target.value;
        console.log("handleChangeFilterType "+valueSlider[0]+" "+valueSlider[1]);
        updateSearchFields()
    };

    const updateSearchFields = () => {
        updateSearch(filter, valueSlider[0],valueSlider[1],type);
    }


    // const lowercasedFilter = filter.toLowerCase();
    // Object.values(array).filter(item => {
    //     return Object.keys(item).some(key =>
    //         typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
    //     );
    // });

    // console.log(array);

    return (
        <div className={"middle_block_list"}>
            <div className={"center_block"} id={"field"}>
                <SearchField
                    value={filter}
                    onChange={handleChange}
                    onClickEvent={handleClick}
                    handleChange={handleChangeFilterType}
                    type={type}
                    valueSlider={valueSlider}
                    handleChangeSlider={handleChangeSlider}
                />
                {array.map(item => (
                    <div style={styles.li} key={item._id}>
                        {(id === LINES.books) ?
                            <OutlinedCard
                                id={item._id}
                                link_text={"book"}
                                text={item.name}
                                type={item.section}
                                // author_id = {item.author_id}
                                year={item.year_published}
                            />
                            :
                            <OutlinedCard
                                id = {item._id}
                                link_text={"author"}
                                text={item.name}
                                type={[item.section]}
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
        updateSearchField: bindActionCreators(getUpdateSearchBookResult,dispatch),
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