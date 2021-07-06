import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getAuthorName, getDataBook} from "../store/books/actions";
import '../scenes/scenes.css'
import '../styles/text.css'
import {BookOfList} from "../components/atoms/BookOfList";
import {Link} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";

const BookPage = ({name,
                      isLoading,
                      authorName,
                      link_of_author,
                      year_published,
                      link_of_text,
                      array_of_words,
                      section,
                      getData,
                      getAuthorName}) => {
    const link = window.location.pathname
    const token = link.substr(6,link.length-6)

    useEffect(() => {
        isLoading = false
        getData(token);
    },[])

    useEffect(() => {
        getAuthorName(link_of_author);
    },[link_of_author])

    return (
        <div className="center_div">
            {
                // (isLoading === true)?
                    <div className="info">
                        <Link className="unlink_text" to={link_of_text}>
                            <b>{name}</b>
                        </Link>
                        г. {year_published}
                        <br/>
                        Автор:<Link className="unlink_text" to={"/author/"+link_of_author}>
                            <b>{authorName}</b>
                        </Link>
                        <br/>
                        <br/>
                        Разделы: {section}
                    </div>
                // :
                //     <CircularProgress />
            }
        </div>
    )
}

const putStateToProps = (state) => {
    return {
        isLoading: state.books.isLoading,
        name: state.books.name,
        authorName: state.books.authorName,
        link_of_author: state.books.link_of_author,
        year_published: state.books.year_published,
        link_of_text: state.books.link_of_text,
        array_of_words: state.books.array_of_words,
        section: state.books.section,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData : bindActionCreators(getDataBook,dispatch),
        getAuthorName : bindActionCreators(getAuthorName,dispatch)
    }
}

export default connect(putStateToProps,putDispatchToProps)(BookPage);
