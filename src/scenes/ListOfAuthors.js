import React, {useEffect} from "react";
import {LineOfAuthor} from "../components/molecules/LineOfAuthor";
import {connect} from "react-redux";
import {LINES} from "../utils/constants";
import {Lines} from "../components/molecules/Lines";

const ListOfAuthor = (props) => {
    console.log(props)
    return (
        <div>
            <Lines array={props.authors} id={LINES.authors}/>
            {/*<LineOfAuthor array={props.authors}/>*/}
        </div>
    )
}

const putStateToProps = state => {
    return{
        authors: state.authors.authors
    }
}

export default connect(putStateToProps)(ListOfAuthor);