import React, {useEffect, useState} from "react";
import {ListOfAuthor} from "./ListOfAuthors";
import {AddAuthor} from "../components/organisms/AddAuthor";
import {Link, Switch} from "react-router-dom";
import {bindActionCreators, createStore} from "redux";
import {connect, Provider} from "react-redux";
import {update_navbar} from "../store/navbar/actions";
import {NAVBAR_TITLE} from "../utils/constants";
import '../styles/text.css'
import {Fab} from "../components/atoms/Fab";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        marginLeft:20,
        marginRight: 20,
        fontSize:20,
        textDecoration: "none",
    },

    link: {
        textDecoration: "none",
    },

    left:{
        float:"left",
        textAlign:"left",
        fontSize: 25,
        // fontWeight: 520,
    },
});

const MainPage = ({updateNavbar}) => {
    const classes  = useStyles();

    useEffect(() => {
        updateNavbar(NAVBAR_TITLE.Home)
    })

    return (
        <div className="App">

            <header>
                <a style={styles.block_top}>
                    <div className={"main_page_text"}>
                        Рады вас видеть на нашем сайте <text className={"main_page_text_color"}>HypeWords.</text>
                        <br/>
                        <text className={"main_page_text_color"}>HypeWords</text> — сайт про любимые слова авторов и разных книг
                    </div>
                </a>
                <div className={"main_div_buttons"}>
                    <Link className={classes.link} to={"/books/1"}>
                        <Button variant={"contained"} color={"primary"} className={classes.button}>
                            Смотреть книги
                        </Button>
                    </Link>
                    <Link className={classes.link} to={"/authors/1"}>
                        <Button variant={"contained"} color={"primary"} className={classes.button}>
                            Изучать авторов
                        </Button>
                    </Link>
                    <Link className={classes.link} to={"/analyze"}>
                        <Button variant={"contained"} color={"secondary"} className={classes.button}>
                            Анализировать текст
                        </Button>
                    </Link>
                </div>
            </header>
        </div>
    );
}

const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        updateNavbar: bindActionCreators(update_navbar,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(MainPage);

const styles={
    about_me:{
        position: 'relative',
        display:'absolute',
        // display:'table-cell!important',
        // display: 'table-cell',
        // display: 'flex',
        fontSize: 20,
        // marginTop: 100,
        textAlign:'flex-end',
        verticalAlign: 'bottom',
        bottom: 0,
        marginBottom:0,
        alignItems: 'flex-end',
    },

    button_analyze:{
        position: 'absolute',
        display:'absolute',
        borderRadius:20,
        justifyContent: 'flex-end',
        fontSize: 20,
        backgroundColor: 'blue',
        color:'white',
        fontWeight: 600,
        // marginRight:0,
        // paddingRight: 0,
        // textAlign: 'flex-end',
        alignItems: 'flex-end',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        right:10,
        bottom:10,
    },

    main:{
        display: 'block',
        position: 'relative',
    },

    img_back:{
        width:'100%',
        height:'auto',
    },

    block_top:{
        // position:'absolute',
        // position:'relative',
        // display:'inline-block',
        // top: 40,
        color:'#000000',
        // verticalAlign: 'bottom',
    }

}