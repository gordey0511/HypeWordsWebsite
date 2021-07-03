import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {getTextOfBook} from "../store/books/actions";
import {connect} from "react-redux";

const TextOfBook = ({link,text_book, getText}) => {
    useEffect(() => {
        getText(link);
    })

    return (
        <div>

        </div>
        // {text_book.map(({name,cnt}) =>
        //     <div>
        //
        //     </div>
        // )
        // }
    )
}

const putStateToProps = state => {
    return {
        link:state.books.link_of_text,
        text_book: state.books.text_book,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getText : bindActionCreators(getTextOfBook,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(TextOfBook);