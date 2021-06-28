import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {LinesOfBooks} from "../components/molecules/LinesOfBooks";

const AllBooks = (props) => {
    console.log(props.books)
    return (
        <div>
            <LinesOfBooks array={props.books}/>
        </div>
    )
}

const putStateToProps = state => {
    return {
        books: state.books.books
    }
}

export default connect(putStateToProps)(AllBooks);