import React, {useEffect} from "react";
import {LineOfAuthor} from "../components/molecules/LineOfAuthor";
import {connect} from "react-redux";

const ListOfAuthor = (props) => {
    console.log(props)
    return (
        <div>
            <LineOfAuthor array={props.authors}/>
        </div>
    )
}

const putStateToProps = state => {
    return{
        authors: state.authors.authors
    }
}

export default connect(putStateToProps)(ListOfAuthor);