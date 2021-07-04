import React, {useEffect} from "react";
import {LinesOfAuthorsBooks} from "../components/molecules/LinesOfAuthorsBooks";
import {bindActionCreators} from "redux";
import {getDataAuthor} from "../store/authors/actions";
import {connect} from "react-redux";
import '../scenes/scenes.css'
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";
import {Link} from "react-router-dom";

export const AuthorPage = ({name,
                               about,
                               books,
                               section,
                               date_of_live,
                               place_of_live,
                               array_of_words,
                               getDataAuthor,
                               updateNavbar}) => {

    const link = window.location.pathname
    const token = link.substr(8,link.length-6)

    useEffect(() => {
        console.log("AUTHOR PAGE "+token)
        getDataAuthor(token);
        updateNavbar(NAVBAR_TITLE.Authors);
    },[])

    useEffect(() => {
        console.log("AUTHOR PAGE BOOKS "+books)
    },[books])

    return (
        <div className="center_div">
            <b>{name}</b>
             {about}
            <br/>
            {
                (date_of_live !== ""
                &&date_of_live !== null
                &&date_of_live !== undefined)?
                    <div>
                        Годы жизни: <b>{date_of_live}</b>
                        <br/>
                    </div>
                :
                    <div></div>
            }
            {
                (place_of_live !== ""
                &&place_of_live !== null
                    &&place_of_live !== undefined)?
                    <div>
                        Место жизни: <b>{place_of_live}</b>
                        <br/>
                    </div>
                    :
                    <div></div>
            }
            Секция: {section}
            <br/>
            Его книги
            {books.map(({name,id}) => (
                <div>
                    <Link to={"/book/"+id}>
                        {name}
                    </Link>
                </div>
                )
            )}
            {/*<LinesOfAuthorsBooks array={books}/>*/}
        </div>
    )
}

const putStateToProps = (state) => {
    return{
        name: state.authors.name,
        about: state.authors.about,
        section: state.authors.section,
        date_of_live: state.authors.date_of_live,
        place_of_live: state.authors.place_of_live,
        books: state.authors.books,
    }
}

const putDispatchToProps = (dispatch) => {
    return{
        getDataAuthor : bindActionCreators(getDataAuthor,dispatch),
        updateNavbar: bindActionCreators(update_navbar,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(AuthorPage);