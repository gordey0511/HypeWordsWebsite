import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {getDataBook, getTextOfBook} from "../store/books/actions";
import {connect} from "react-redux";
import {CircularProgress, Typography} from "@material-ui/core";
import "../styles/text.css"
import {Fab} from "../components/atoms/Fab";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link} from "react-router-dom";

const TextBook = ({
                      isLoading,
                      textBook,
                      name,
                      authorName,
                      link_of_author,
                      section,
                      year_published,
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
            <div style={{marginBottom:30}}>
                <Link to={`/book/${token}`} className={"unlink_text"}>
                    <div className={"text_link_title"}>
                        {name}
                    </div>
                </Link>

                <Link to={`/author/${link_of_author}`} className={"unlink_text"}>
                    <div className={"book_author"}>
                        {authorName}
                    </div>
                </Link>

                <div className={"book_author"}>
                    {`${year_published}, `}
                    {section.map((name) => (
                        <text>
                            {name}
                        </text>
                    ))}
                </div>
            </div>
            {
                (Boolean(isLoading))?
                    <CircularProgress/>
                    :
                    <div style={{ maxWidth: '100%', overflow: 'hidden',  }}>
                        {textBook.map((text) =>
                            (
                                <div className={"text_book"}>
                                    <Typography variant={"body1"}>
                                        {text}
                                    </Typography>
                                </div>
                            )
                        )}
                    </div>
            }

            {/*<Fab color="secondary" size="small" aria-label="scroll back to top">*/}
            {/*    <KeyboardArrowUpIcon />*/}
            {/*</Fab>*/}
        </div>
    )
}

const putStateToProps = state => {
    return {
        textBook: state.books.text_book,
        name: state.books.name,
        authorName: state.books.authorName,
        link_of_author: state.books.link_of_author,
        year_published: state.books.year_published,
        section: state.books.section,
        isLoading: state.books.isLoading,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getData: bindActionCreators(getDataBook,dispatch),
        getText : bindActionCreators(getTextOfBook,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(TextBook);