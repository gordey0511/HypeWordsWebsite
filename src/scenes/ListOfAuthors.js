import React, {useEffect} from "react";
import {LineOfAuthor} from "../components/molecules/LineOfAuthor";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {update_navbar} from "../store/navbar/actions";
import {LINES, NAVBAR_TITLE} from "../utils/constants";
import Lines from "../components/molecules/Lines";
import {getAllAuthors} from "../store/authors/actions";

const ListOfAuthor = ({authors,updateNavbar,getAllAuthors}) => {

    useEffect(() => {
        updateNavbar(NAVBAR_TITLE.Authors);
        getAllAuthors(1)
    },[])

    return (
        <div>
            <Lines array={authors} id={LINES.authors}/>
            {/*<LineOfAuthor array={props.authors}/>*/}
        </div>
    )
}

const putStateToProps = state => {
    return{
        authors: state.authors.authors
    }
}

const putDispatchToProps = dispatch => {
    return {
        updateNavbar: bindActionCreators(update_navbar,dispatch),
        getAllAuthors: bindActionCreators(getAllAuthors,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(ListOfAuthor);