import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect, withRouter, Router} from "react-router-dom";
import MainPage from "./scenes/MainPage";
import {AboutMe} from "./scenes/AboutMe";
import AuthorPage from "./scenes/AuthorPage";
import ListOfAuthor from "./scenes/ListOfAuthors";
import AnalyzePage from "./scenes/AnalyzePage";
import AllBooks from "./scenes/AllBooks";
import BookPage from "./scenes/BookPage";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Profile from "./scenes/Profile";
import TextBook from "./scenes/TextBook";

const App= (props) => {
    const {history} = props;
    require('dotenv').config();

    return(
        <Switch>
            <Route exact history={history} path={'/'} component={MainPage}/>
            <Route exact path={'/aboutme'} component={AboutMe}/>
            <Route exact path='/author/:id' component={AuthorPage}/>
            <Route exact path='/authors' component={ListOfAuthor}/>
            <Route exact path='/analyze' component={AnalyzePage}/>
            <Route exact path='/books' component={AllBooks}/>
            <Route exact path='/book/:id' component={BookPage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/book/text/:token' component={TextBook}/>
        </Switch>
    )
}


export default App;