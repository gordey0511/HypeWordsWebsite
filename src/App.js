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

const App = ({ setToken }, props) => {
  const { history } = props
  require('dotenv').config()
  setToken()

  return (
    <Switch>
      <Route exact history={history} path={'/'} component={MainPage} />
      <Route exact path="/test" component={CustomizedSnackbars} />
      <Route exact path={'/aboutme'} component={AboutMe} />
      <Route exact path="/author/:id" component={AuthorPage} />
      <Route exact path="/authors" component={ListOfAuthor} />
      <Route exact path="/analyze" component={AnalyzePage} />
      <Route exact path="/books" component={AllBooks} />
      <Route exact path="/book/:id" component={BookPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/user/:token" component={UserPage} />
      <Route exact path="/book/text/:token" component={TextBook} />
      <Route exact path="/posts/" component={Posts} />
      <Route exact path="/create_post" component={CreatePost} />
      <Route exact path="/post/:id" component={PostPage} />
      <Route exact path="/send_essay/:id" component={SendEssay} />
      <Route exact path="/check_essay/:id" component={Essay} />
      <Route exact path="/create_topic" component={CreateTopic} />
      <Route exact path="/check_essays" component={CheckEssays} />
      <Route exact path="/essay/:id" component={EssayPage} />
      <Route exact path="/test_check" component={EssayChecking} />
      <Route exact path="/user_essays/" component={UserEssays} />
      <Route exact path="/user_essays/:id" component={UserEssays} />
    </Switch>
  )
}

const putDispatchToProps = (dispatch) => {
  return {
    setToken: bindActionCreators(setToken, dispatch),
  }
}

export default connect(null, putDispatchToProps)(App)
