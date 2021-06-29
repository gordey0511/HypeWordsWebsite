import React, {useState} from "react";
import {ListOfAuthor} from "./ListOfAuthors";
import {AddAuthor} from "../components/organisms/AddAuthor";
import {AuthorAPI} from "../services/AuthorApi";
import {Link, Switch} from "react-router-dom";
import {bindActionCreators, createStore} from "redux";
import {connect, Provider} from "react-redux";

const MainPage = (props) => {
    console.log(props);


    const addAuthor = (data) => {
        console.log("AddAuthor "+data.name)
        AuthorAPI.addAuthor(data)
        const authors=AuthorAPI.all;
        // console.log(authors)
    }

    return (
        <div className="App">
            <header className="App-header">
                <a style={styles.block_top}>
                    <b>Всем привет!<br/> Это сайт про любимые слова авторов</b>
                    <img style={styles.img_back} src="books_background_main_page.png"/>
                </a>

                {/*<ListOfAuthor array={AuthorAPI.all()}/>*/}

                {/*<AddAuthor addAuthor={addAuthor}/>*/}
                {/*<div style={styles.about_me}>*/}
                {/*    <Link to={'/aboutme'}>*/}
                {/*        <text style={styles.about_me}>Обо мне</text>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                <div>
                    <Link to={'/analyze'}>
                        <button style={styles.button_analyze}>
                            Проанализировать свой текст
                        </button>
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

const puActionToProps = (dispatch) => {
    return {
        // changeFirstName : bindActionCreators(changeFirstName,dispatch),
        // changeSecondName : bindActionCreators(changeSecondName,dispatch),
    }
}

export default connect(putStateToProps,puActionToProps)(MainPage);

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
        display:'inline-block',
        // top: 40,
        color:'#000000',
        verticalAlign: 'bottom',
    }

}