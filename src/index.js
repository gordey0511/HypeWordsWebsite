import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom"
import {createBrowserHistory} from "history";
import {connect, Provider} from "react-redux";
import Navbar from "./components/organisms/Navbar";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import {initializeStore} from "./store/store";

const history = createBrowserHistory()

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

const AppContainer = () => {
    const { store } = initializeStore()
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter history={history}>
                    <Navbar/>
                    <WrappedApp />
                </BrowserRouter>

            </ThemeProvider>
        </Provider>
    )
}


ReactDOM.render(
    <AppContainer/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
