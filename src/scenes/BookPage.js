import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getDataBook} from "../store/books/actions";
import '../scenes/scenes.css'

const BookPage = ({name, author,link_of_author,date_of_publish, link_of_text, array_of_words,getData}) => {
    useEffect(() => {
        getData("/p/pushkin_a_s/text_0170.shtml");
    },[])

    return (
        <div className="center_div">
            Название: <b>{name}</b>
            <br/>
            Автор: <b>{author}</b>
            <br/>
            Дата публикации: <b>{date_of_publish}</b>
            <br/>

        </div>
    )
}

const putStateToProps = (state) => {
    return {
        name: state.books.name,
        author: state.books.author,
        link_of_author: state.books.link_of_author,
        date_of_publish: state.books.date_of_publish,
        link_of_text: state.books.link_of_text,
        array_of_words: state.books.array_of_words,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData : bindActionCreators(getDataBook,dispatch)
        //dispatch(getDataBook(value)) = getData(value)
    }
}

export default connect(putStateToProps,putDispatchToProps)(BookPage);
