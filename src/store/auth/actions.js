import { ACTION_IS_FAVORITE_BOOK } from '../books/actions'

export const ACTION_CREATE_USER = 'ACTION_REGISTER_USER'
export const ACTION_LOGIN_USER = 'ACTION_LOGIN_USER'
export const ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER'
export const ACTION_GET_DATA_USER = 'ACTION_GET_DATA_USER'
export const ACTION_GET_FAVORITE_BOOKS = 'ACTION_GET_FAVORITE_BOOKS'
export const ACTION_GET_USER_LIST_ESSAYS = 'ACTION_GET_USER_LIST_ESSAYS'
export const ACTION_GET_DATA_USER_INF = 'ACTION_GET_DATA_USER_INF'
export const ACTION_UPDATE_TOKEN = 'ACTION_UPDATE_TOKEN'
export const ACTION_SET_VERIFIED_EMAIL = 'ACTION_SET_VERIFIED_EMAIL'
export const ACTION_SEND_VERIFY_EMAIL = 'ACTION_SEND_VERIFY_EMAIL'

export const createUser = (name, surname, email, password) => {
  return {
    type: ACTION_CREATE_USER,
    rest: '/register',
    method: 'POST',
    query: { name: name, surname: surname, email: email, password: password },
  }
}

export const loginUser = (email, password) => {
  return {
    type: ACTION_LOGIN_USER,
    rest: '/login',
    method: 'POST',
    query: { email: email, password: password },
  }
}

export const logOut = () => {
  return {
    type: ACTION_LOGOUT_USER,
  }
}

export const getUser = (token) => {
  return {
    type: ACTION_GET_DATA_USER,
    rest: '/user/' + token,
    method: 'GET',
    query: null,
  }
}

export const getUserInf = (token) => {
  return {
    type: ACTION_GET_DATA_USER_INF,
    rest: '/user/' + token,
    method: 'GET',
    query: null,
  }
}

export const getFavoriteBooks = (token) => {
  return {
    type: ACTION_GET_FAVORITE_BOOKS,
    rest: '/books/favorite/' + token,
    method: 'GET',
    query: null,
  }
}

export const getUserEssays = (id) => {
  return {
    type: ACTION_GET_USER_LIST_ESSAYS,
    rest: '/get_user_essays/' + id,
    method: 'GET',
    query: null,
  }
}

export const setToken = () => {
  return {
    type: ACTION_UPDATE_TOKEN,
  }
}

export const setVerifiedEmail = (id) => {
  return {
    type: ACTION_SET_VERIFIED_EMAIL,
    rest: '/verify_email/' + id,
    method: 'GET',
    query: null,
  }
}

export const sendVerifyEmail = (id) => {
  return {
    type: ACTION_SEND_VERIFY_EMAIL,
    rest: '/send_verify_email/' + id,
    method: 'GET',
    query: null,
  }
}
