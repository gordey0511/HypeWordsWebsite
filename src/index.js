import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Route, BrowserRouter, Switch} from "react-router-dom"
import {createBrowserHistory} from "history";
import {MainPage} from "./scenes/MainPage";
import {AboutMe} from "./scenes/AboutMe";
import {AuthorPage} from "./scenes/AuthorPage";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";
import rootReducer from "./store/reducers";
import {Navbar} from "./components/organisms/Navbar";

const history = createBrowserHistory()

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const store = createStore(rootReducer);

const mapStateToProps = (state) => {
    console.log(state)
    return {
        firstName: state.firstName,
        secondName: state.secondName,
    }
}

const  WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Navbar/>
            <WrappedApp />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
