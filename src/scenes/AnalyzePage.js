import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {changeText} from "../store/analyze/actions";
import {connect} from "react-redux";
import "../styles/button.css"
import "../styles/margins.css"
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";

const AnalyzePage = ({text,changeText, updateNavbar}) => {


    useEffect(() => {
        // changeText()
        updateNavbar(NAVBAR_TITLE.Analyze)
    },[])

    return (
        <div className="App">
            <textarea
                rows={"20"}
                cols={"50"}
                placeholder={"Введите ваш текст"}
                value={text}
                onChange={(event) => {
                    console.log("UPDATE TEXT " +event.target.value)
                    changeText(event.target.value)
                }}
            >
            </textarea>
            <br/>
            <button className={"button_analyze"}>
                Анализировать
            </button>
            <br/>
            <div className={"top_margin"}>
                Текст из поля: {text}
            </div>

        </div>
    );
}

const puStateToProps = (state) => {
    return{
        text:state.analyze.text_input,
    }
}

const putDispatchToProps = (dispatch) => {
    return{
        changeText: bindActionCreators(changeText,dispatch),
        updateNavbar: bindActionCreators(update_navbar,dispatch),
    }
}

export default connect(puStateToProps,putDispatchToProps)(AnalyzePage);

















