import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {getDataBook, getTextOfBook} from "../store/books/actions";
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";
import "../styles/text.css"

const TextBook = ({
                      textBook,
                      name,
                      getText,
                      getData,
}) => {
    const link = window.location.pathname
    const token = link.substr(11,link.length-6)

    useEffect(() => {
        getData(token)
        getText(token);
    },[])

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    //
    // componentWillUnmount =( ) {
    //     window.removeEventListener('scroll', handleScroll);
    // }
    //
    // const handleScroll = (e) => {
    //     if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
    //         console.log('I need to load some more content here…');
    //     }
    // }

    return (
        <div className={"div_text_book"}>
            <div className={"text_book_title"}>
                {name}
            </div>
            {textBook.map((text) =>
                <div className={"text_book"}>
                    <Typography variant={"body1"}>
                        {text}
                    </Typography>
                </div>
            )
            }
        </div>
    )
}

const putStateToProps = state => {
    return {
        textBook: state.books.text_book,
        name: state.books.name,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getData: bindActionCreators(getDataBook,dispatch),
        getText : bindActionCreators(getTextOfBook,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(TextBook);