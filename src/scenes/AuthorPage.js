import React, {useEffect} from "react";
import {LinesOfAuthorsBooks} from "../components/molecules/LinesOfAuthorsBooks";
import {bindActionCreators} from "redux";
import {getDataAuthor} from "../store/authors/actions";
import {connect} from "react-redux";
import '../scenes/scenes.css'
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";

export const AuthorPage = ({name,link_of_author,profile,date_of_birth,date_of_death,books,array_of_words,getData, updateNavbar}) => {

    useEffect(() => {
        updateNavbar(NAVBAR_TITLE.Authors);
        getData("/a/nikulshin/2132132.html");
    },[])

    return (
        <div className="center_div">
            Имя: <b>{name}</b>
            <br/>
            Годы жизни: <b>{date_of_birth} - {date_of_death}</b>
            <br/>
            <LinesOfAuthorsBooks array={books}/>
        </div>
    )
}

const putStateToProps = (state) => {
    return{
        name: state.authors.name,
        profile: state.authors.profile,
        link_of_author: state.authors.link_of_author,
        date_of_birth: state.authors.date_of_birth,
        date_of_death: state.authors.date_of_death,
        array_of_words: state.authors.array_of_words,
        books: state.authors.books,
    }
}

const putDispatchToProps = (dispatch) => {
    return{
        getData : bindActionCreators(getDataAuthor,dispatch),
        updateNavbar: bindActionCreators(update_navbar,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(AuthorPage);