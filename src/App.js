import React, { useEffect } from 'react'
// import logo from './logo.svg';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import MainPage from './scenes/MainPage'
import { AboutMe } from './scenes/AboutMe'
import AuthorPage from './scenes/author/AuthorPage'
import ListOfAuthor from './scenes/author/ListOfAuthors'
import AnalyzePage from './scenes/AnalyzePage'
import AllBooks from './scenes/book/Books'
import BookPage from './scenes/book/BookPage'
import Login from './scenes/auth/Login'
import Register from './scenes/auth/Register'
import Profile from './scenes/auth/Profile'
import TextBook from './scenes/book/TextBook'
import Posts from './scenes/post/Posts'
import CreatePost from './scenes/post/CreatePost'
import PostPage from './scenes/post/PostPage'
import SendEssay from './scenes/essay/SendEssay'
import CreateTopic from './scenes/essay/CreateTopic'
import { Essay } from './components/molecules/Essays/Essay'
import CustomizedSnackbars from './scenes/Test'
import { EssayChecking } from './components/atoms/TextsInput/EssayCheckingCKEditor'
import CheckEssays from './scenes/essay/CheckEssays'
import EssayPage from './scenes/essay/EssayPage'
import UserEssays from './scenes/essay/UserEssays'
import UserPage from './scenes/auth/UserPage'
import { setToken } from './store/auth/actions'
import { initializeStore } from './store/store'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import VerifyEmail from './scenes/VerifyEmail'
import TestPage from './scenes/TestPage'
import NotExistPage from './components/molecules/Problems/NotExistPage'
import FEATURES from './utils/features'

const App = ({ user_id, verified_email, setToken }, props) => {
  const { history } = props
  require('dotenv').config()
  setToken()
  const routes = [ 
    ["/", MainPage],
    ["/test", CustomizedSnackbars],
    ["/aboutme", AboutMe],
    ["/login", Login],
    ["/register", Register],
    ["/profile", Profile],
    ["/user/:token", UserPage],
    ["/posts/", Posts],
    ["/create_post", CreatePost],
    ["/post/:id", PostPage],
    ["/send_essay/:id", SendEssay],
    ["/check_essay/:id", Essay],
    ["/create_topic", CreateTopic],
    ["/check_essays", CheckEssays],
    ["/essay/:id", EssayPage],
    ["/test_check", EssayChecking],
    ["/user_essays/", UserEssays],
    ["/user_essays/:id", UserEssays],
    ["/verify_email/:id", VerifyEmail],
    ["/test_page", TestPage],
  ]
  if (FEATURES.AUTHORS) {
    Array.prototype.push.apply(routes, [
      ["/author/:id", AuthorPage],
      ["/authors", ListOfAuthor],
    ])
  }
  if (FEATURES.BOOKS) {
    Array.prototype.push.apply(routes, [
      ["/books", AllBooks],
      ["/book/:id", BookPage],
      ["/book/text/:token", TextBook],
    ])
  }
  if (FEATURES.ANALYZE) {
    Array.prototype.push.apply(routes, [
      ["/analyze", AnalyzePage],
    ])
  }

  return (
    <Switch>
      {routes.map(r => <Route exact path={r[0]} component={r[1]} key={r[0]}/>)}
    </Switch>
  )
}

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
    verified_email: state.auth.verified_email,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    setToken: bindActionCreators(setToken, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(App)
