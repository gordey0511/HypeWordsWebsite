import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    addFavoriteBook,
    deleteFavoriteBook,
    getAuthorName,
    getDataBook,
    getWordsBook,
    isFavoriteBook
} from "../store/books/actions";
import '../scenes/scenes.css'
import '../styles/text.css'
import '../styles/blocks.css'
import {Bookmark} from "../components/atoms/Bookmark";
import {Link} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from "@material-ui/core/Button";
import {ButtonBookPage} from "../components/molecules/ButtonBookPage";

const BookPage = ({name,
                      isLoading,
                      isLoadingWords,
                      isFavorite,
                      userToken,
                      authorName,
                      link_of_author,
                      year_published,
                      link_of_text,
                      words,
                      section,
                      getData,
                      getAuthorName,
                      getIsFavorite,
                      addFavoriteBook,
                      deleteFavoriteBook,
                      getWords,
}) => {
    const link = window.location.pathname
    const token = link.substr(6,link.length-6)

    // const [userToken,setUserToken] = useState("")
    useEffect(() => {
        isLoading = false
        // setUserToken(localStorage.getItem("token"))
        console.log("BOOK PAGE "+userToken)
        if(userToken!==undefined&&userToken!==""){
            getIsFavorite(userToken,token,)
        }
    },[])

    useEffect(() => {
        getAuthorName(link_of_author);
    },[link_of_author])

    useEffect(() => {
        if(token!==undefined && token!==""){
            getData(token);
            // getWords(token);
        }
    },[token])

    useEffect(() => {
        console.log("IS LOADING WORDS " + isLoadingWords)
    },[isLoadingWords])

    const handleAdd = () => {
        addFavoriteBook(userToken,token)
    }

    const handleDelete = () => {
        deleteFavoriteBook(userToken,token)
    }

    return (
        <div className="center_div">
            {
                // (isLoading === true)?
                <div className="info">
                    <div className={"block_book"}>
                        <div className={"block_book_param"}>
                            <Link className="unlink_text" to={link_of_text}>
                                <b className={"book_title"}>{name}</b>
                            </Link>
                            <Link className="unlink_text" to={"/author/"+link_of_author}>
                                <div className={"book_author"}>
                                    {authorName}
                                </div>
                            </Link>
                            <div className={"book_section"}>
                                {year_published}, {section}
                            </div>
                            <div className={"book_words"}>
                                <div className={"book_words_title"}>
                                    Самые любимые слова
                                </div>

                                {
                                    (!Boolean(isLoadingWords))?
                                        <div>
                                            {
                                                words.map(({name,cnt,rate}) => (
                                                    <div>
                                                        <i>{name}</i> — {cnt}
                                                        {
                                                            (String(cnt)[String(cnt).length-1]==='2'||String(cnt)[String(cnt).length-1]==='3'||String(cnt)[String(cnt).length-1]==='4')?
                                                                <text> раза</text>
                                                                :
                                                                <text> раз</text>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        :
                                        <div>
                                            <CircularProgress />
                                        </div>

                                }
                            </div>

                            <ButtonBookPage
                                token={token}
                                userToken={userToken}
                                isFavorite={isFavorite}
                                handleAdd={handleAdd}
                                handleDelete={handleDelete}
                            />
                        </div>
                        <img  className={"img_book"}   src={"/book.jpg"}/>
                    </div>
                </div>
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
        words: state.books.words,
        section: state.books.section,
        isFavorite: state.books.isFavorite,
        isLoadingWords: state.books.isLoadingWords,
        userToken: state.auth.token,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData : bindActionCreators(getDataBook,dispatch),
        getAuthorName : bindActionCreators(getAuthorName,dispatch),
        getIsFavorite: bindActionCreators(isFavoriteBook,dispatch),
        addFavoriteBook: bindActionCreators(addFavoriteBook,dispatch),
        deleteFavoriteBook: bindActionCreators(deleteFavoriteBook,dispatch),
        getWords: bindActionCreators(getWordsBook,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(BookPage);
