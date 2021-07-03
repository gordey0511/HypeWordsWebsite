import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {LinesOfBooks} from "../components/molecules/LinesOfBooks";
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";
import {Lines} from "../components/molecules/Lines";
import {LINES} from '../utils/constants';

const AllBooks = ({books,updateNavbar}) => {

    useEffect(() => {
        updateNavbar(NAVBAR_TITLE.Books);
    })
    return (
        <div>
            <Lines array={books} id={LINES.books}/>
            {/*<LinesOfBooks array={props.books}/>*/}
        </div>
    )
}

const putStateToProps = state => {
    return {
        books: state.books.books
    }
}

const putDispatchToProps = dispatch => {
    return{
        updateNavbar: bindActionCreators(update_navbar,dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(AllBooks);