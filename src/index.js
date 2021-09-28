import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom"
import {createBrowserHistory} from "history";
import {applyMiddleware, createStore} from "redux";
import {connect, Provider} from "react-redux";
import rootReducer from "./store/reducers";
import Navbar from "./components/organisms/Navbar";
import {api} from "./store/api";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";

const history = createBrowserHistory()

const store = createStore(rootReducer,applyMiddleware(api));

const theme = createMuiTheme({
    palette:{
        // primary: '#de6161',
        // main: '#de6161',
    }
})

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName,
    }
}

const  WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter history={history}>
                <Navbar/>
                <WrappedApp />
            </BrowserRouter>

        </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
