import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect, withRouter, Router} from "react-router-dom";
import MainPage from "./scenes/MainPage";
import {AboutMe} from "./scenes/AboutMe";
import {AuthorPage} from "./scenes/AuthorPage";
import {AnalyzePage} from "./scenes/AnalyzePage";
import {ListOfAuthor} from "./components/organisms/ListOfAuthors";
import AllBooks from "./scenes/AllBooks";

const App= (props) => {
    const {history} = props;

    return(
        <Switch>
            <Route exact history={history} path={'/'} component={MainPage}/>
            <Route path={'/aboutme'} component={AboutMe}/>
            <Route exact path='/author/:id' component={AuthorPage}/>
            <Route exact path='/authors' component={ListOfAuthor}/>
            <Route exact path='/analyze' component={AnalyzePage}/>
            <Route exact path='/books' component={AllBooks}/>
        </Switch>
    )
}


export default App;