import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ButtonMaterial } from '../../components/atoms/Buttons/ButtonMaterial'
import { bindActionCreators } from 'redux'
import { getFavoriteBooks, getUserInf, logOut } from '../../store/auth/actions'
import { Link, useHistory } from 'react-router-dom'
import { update_navbar } from '../../store/navbar/actions'
import Login from './Login'
import { NAVBAR_TITLE } from '../../utils/constants'
import '../../styles/blocks.css'
import { LinesBooks } from '../../components/molecules/LinesBooks'
import UserPosts from '../post/UserPosts'

const UserPage = ({
  userName,
  userEmail,
  logout,
  getData,
  favorites,
  updateNavbar,
  getFavoriteBooks,
}) => {
  let history = useHistory()
  const link = window.location.pathname
  const userToken = link.substr(6, link.length - 6)

  useEffect(() => {
    console.log('FAVORITE BOOKS ' + userToken + ' ! ' + userToken)
    if (userToken !== undefined && userToken !== null && userToken !== '') {
      getData(userToken)
      getFavoriteBooks(userToken)
    }
  }, [userToken])

  return (
    <div>
      <div className={'block_profile'}>
        <div className={'profile_name'}>{userName}</div>
        <div className={'profile_bookmark'}>Посты</div>
        <UserPosts token={userToken} />
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    userToken: state.auth.userToken,
    userName: state.auth.userName,
    userEmail: state.auth.userEmail,
    favorites: state.auth.favorites,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getUserInf, dispatch),
    updateNavbar: bindActionCreators(update_navbar, dispatch),
    logout: bindActionCreators(logOut, dispatch),
    getFavoriteBooks: bindActionCreators(getFavoriteBooks, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(UserPage)
