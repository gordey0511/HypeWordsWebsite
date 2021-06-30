import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {LinesOfBooks} from "../components/molecules/LinesOfBooks";
import {Lines} from "../components/molecules/Lines";
import {LINES} from '../utils/constants';

const AllBooks = (props) => {
    console.log(props)
    return (
        <div>
            <Lines array={props.books} id={LINES.books}/>
            {/*<LinesOfBooks array={props.books}/>*/}
        </div>
    )
}

const putStateToProps = state => {
    return {
        books: state.books.books
    }
}

export default connect(putStateToProps)(AllBooks);