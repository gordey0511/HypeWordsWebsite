import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {changeText} from "../store/analyze/actions";
import {connect} from "react-redux";
import "../styles/button.css"
import "../styles/margins.css"
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";
import Button from "@material-ui/core/Button";
import {CustomizedDialog} from "../components/atoms/CustomizedDialog";
import {MultilineText} from "../components/atoms/MultilineText";
import {makeStyles} from "@material-ui/core/styles";
import FullWidthAnalyzeResult from "../components/molecules/FullWidthAnalyzeResult";
import {getSimilarAuthor, getUserWords} from "../store/books/actions";

const useStyles = makeStyles(() => ({
    root: {
        width:"100%",
    },

    icon:{
        width:"5%",
    },

    text_field:{
        width:"95%",
    },

    button_analyze:{
        marginTop: 20,
    }
}));

const AnalyzePage = ({
                         text,
                         changeText,
                         updateNavbar,
                         getSimilarAuthor,
                         getWords,}) => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
        getSimilarAuthor(text);
        getWords(text);
    };
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        // changeText()
        updateNavbar(NAVBAR_TITLE.Analyze)
    },[])

    const changeMultilineText = (event) => {
        console.log("UPDATE TEXT " +event.target.value)
        changeText(event.target.value)
    }

    return (
        <div className="App">
            <MultilineText className={classes.root} text={text} changeText={changeMultilineText}/>
            <br/>
            <Button
                variant="contained"
                color={"primary"}
                onClick={handleClickOpen}
                className={classes.button_analyze}
            >
                Анализировать
            </Button>
            <br/>
                {/*<div className={"top_margin"}>*/}
                {/*    Текст из поля: {text}*/}
                {/*</div>*/}

            <FullWidthAnalyzeResult open={open} handleClose={handleClose}/>
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
        getSimilarAuthor: bindActionCreators(getSimilarAuthor, dispatch),
        getWords: bindActionCreators(getUserWords,dispatch),
    }
}

export default connect(puStateToProps,putDispatchToProps)(AnalyzePage);

















