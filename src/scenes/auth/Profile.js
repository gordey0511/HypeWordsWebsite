import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ButtonMaterial } from '../../components/atoms/Buttons/ButtonMaterial'
import { bindActionCreators } from 'redux'
import { getFavoriteBooks, getUser, logOut } from '../../store/auth/actions'
import { Link, useHistory } from 'react-router-dom'
import { update_navbar } from '../../store/navbar/actions'
import Login from './Login'
import { NAVBAR_TITLE } from '../../utils/constants'
import '../../styles/blocks.css'
import { LinesBooks } from '../../components/molecules/LinesBooks'
import UserPosts from '../post/UserPosts'
import { NeedRegistration } from '../../components/molecules/Problems/NeedRegistration'
import NeedAuth, { checkUserAuth } from '../../components/molecules/Problems/NeedAuth'
import { Loading } from '../../components/molecules/Problems/Loading'

const Profile = ({
  name,
  token,
  email,
  logout,
  verified_email,
  getData,
  favorites,
  isLoadingData,
  updateNavbar,
  getFavoriteBooks,
}) => {
  const history = useHistory()

  const value = 0

  useEffect(() => {
    if (token !== undefined && token !== null) {
      getData(token)
    }
  }, [token])

  useEffect(() => {
    if (token !== undefined && token !== null && token !== '') {
      console.log('FAVORITE BOOKS ' + token)
      getFavoriteBooks(token)
    }
  }, [token])

  useEffect(() => {
    console.log('NAME ' + name)
  }, [name])

  const handleButton = () => {
    logout()
    history.push('/')
  }

  const handleButtonCheckEssay = () => {
    history.push('/check_essays')
  }

  const handleButtonUserEssay = () => {
    history.push('/user_essays/' + token)
  }

  return (
    <div className={'block_profile'}>
      {isLoadingData === true ? (
        <Loading />
      ) : (
        <div>
          {checkUserAuth(token, verified_email) ? (
            <div>
              <div className={'profile_name'}>{name}</div>
              <div className={'profile_email'}>{email}</div>
              <div className={'block_profile_sub'}>
                <ButtonMaterial
                  text={'Проверить сочинения'}
                  handleClick={handleButtonCheckEssay}
                  color={'primary'}
                  styles={{
                    height: 50,
                    width: 300,
                  }}
                />

                <ButtonMaterial
                  text={'Мои сочинения'}
                  handleClick={handleButtonUserEssay}
                  color={'primary'}
                  styles={{
                    height: 50,
                    width: 300,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                />

                <ButtonMaterial
                  text={'Выйти'}
                  handleClick={handleButton}
                  color={'secondary'}
                  styles={{
                    height: 50,
                    width: 300,
                  }}
                />
              </div>
              {/*<div className={'profile_bookmark'}>Избранные книги</div>*/}
              {/*<LinesBooks array={favorites} />*/}
              <div>
                <div className={'profile_bookmark'}>Мои посты</div>
                <UserPosts token={token} />
              </div>
            </div>
          ) : (
            <NeedAuth fromProfile={true} />
          )}
        </div>
      )}
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    token: state.auth.token,
    name: state.auth.userName,
    email: state.auth.email,
    favorites: state.auth.favorites,
    verified_email: state.auth.verified_email,
    isLoadingData: state.auth.isLoadingData,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getUser, dispatch),
    updateNavbar: bindActionCreators(update_navbar, dispatch),
    logout: bindActionCreators(logOut, dispatch),
    getFavoriteBooks: bindActionCreators(getFavoriteBooks, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Profile)
