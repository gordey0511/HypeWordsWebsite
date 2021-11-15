import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { connect, Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

import { initializeStore } from './store/store'
import reportWebVitals from './reportWebVitals'
import Navbar from './components/organisms/Navbar'
import App from './App'

import './index.scss'
import { setToken } from './store/auth/actions'
import { Box, Toolbar } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const history = createBrowserHistory()

const theme = createMuiTheme({
  palette: {
    // primary: '#de6161',
    // main: '#de6161',
  },
})

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  }
}

const WrappedApp = connect(mapStateToProps)(App)

const AppContainer = () => {
  const { store } = initializeStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          {/*<Box sx={{ display: 'flex' }}>*/}
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {/*<Toolbar />*/}
              <WrappedApp />
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
