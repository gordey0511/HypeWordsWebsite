import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getDataBook} from "../store/books/actions";
import '../scenes/scenes.css'
import '../styles/text.css'
import {BookOfList} from "../components/atoms/BookOfList";
import {Link} from "react-router-dom";

const BookPage = ({name, author,link_of_author,date_of_publish, link_of_text, array_of_words,getData}) => {
    useEffect(() => {
        getData("/p/pushkin_a_s/text_0170.shtml");
        console.log("ARRAY_OF_WORDS "+array_of_words)
    },[])

    return (
        <div className="center_div">
            <div className="info">
                <Link className="unlink_text" to={link_of_text}>
                    <b>{name}</b>   г. {date_of_publish}
                </Link>
                <br/>
                <Link className="unlink_text" to={link_of_author}>
                    Автор: <b>{author}</b>
                </Link>
                <br/>
            </div>

            <div >
                {
                    array_of_words.map(({name,cnt}) =>
                        <div key={name}>
                            {name}: {cnt}
                        </div>
                    )
                }

                {/*{*/}
                {/*    array_of_words.map(({name}) =>*/}
                {/*        <div>*/}
                {/*            /!*{name}*!/*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
            </div>
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
