import { FAIL, START, SUCCESS } from '../constants'
import {
  ACTION_CREATE_USER,
  ACTION_GET_DATA_USER,
  ACTION_GET_DATA_USER_INF,
  ACTION_GET_FAVORITE_BOOKS,
  ACTION_GET_USER_LIST_ESSAYS,
  ACTION_LOGIN_USER,
  ACTION_LOGOUT_USER,
  ACTION_UPDATE_TOKEN,
} from './actions'

const initialState = {
  name: '',
  myName: '',
  email: '',
  password: '',
  token: '',
  userToken: '',
  userName: '',
  userEmail: '',
  userPassword: '',
  error: '',
  favorites: [
    // {name:"Петя",id:"dsdsd"}
  ],

  essays: [],
}

export const authReducer = (state = initialState, action) => {
  const data = action.payload
  console.log('AUTH REDUCER ' + action.type + ' ' + action.error)
  switch (action.type) {
    case ACTION_CREATE_USER + SUCCESS:
      // localStorage.removeItem("userToken")
      // localStorage.removeItem("userName")
      localStorage.setItem('userToken', data.token)
      return {
        ...state,
        name: data.name,
        email: data.email,
        password: data.password,
        token: data.token,
        error: '',
      }
    case ACTION_CREATE_USER + FAIL:
      return { ...state, error: action.error }
    case ACTION_LOGIN_USER + SUCCESS:
      localStorage.setItem('userToken', data.token)
      return {
        ...state,
        name: data.name,
        email: data.email,
        password: data.password,
        token: data.token,
        error: '',
      }
    case ACTION_LOGIN_USER + FAIL:
      return { ...state, error: 'Такого пользователя не существует' }
    case ACTION_LOGIN_USER + START:
      return { ...state, error: '' }
    case ACTION_LOGOUT_USER:
      localStorage.removeItem('userToken')
      console.log(localStorage)
      return {
        token: '',
        name: '',
        email: '',
        password: '',
        error: '',
      }
    case ACTION_UPDATE_TOKEN:
      console.log('ACTION UPDATE TOKEN ' + localStorage.getItem('userToken'))
      return {
        ...state,
        token: localStorage.getItem('userToken'),
      }
    case ACTION_GET_DATA_USER + START:
      return {
        ...state,
        name: '',
        email: '',
        password: '',
        error: '',
      }
    case ACTION_GET_DATA_USER + SUCCESS:
      // localStorage.setItem('userToken', data.token)
      console.log('GET DATA USER ' + data.name)
      return {
        ...state,
        name: data.name,
        myName: data.name,
        userName: data.name,
        email: data.email,
        password: data.password,
      }
    case ACTION_GET_FAVORITE_BOOKS + SUCCESS:
      return {
        ...state,
        favorites: data,
      }
    case ACTION_GET_USER_LIST_ESSAYS + START:
      return {
        ...state,
        essays: [],
      }
    case ACTION_GET_USER_LIST_ESSAYS + SUCCESS:
      return {
        ...state,
        essays: data,
      }
    case ACTION_GET_DATA_USER_INF + SUCCESS:
      return {
        ...state,
        userName: data.name,
        userEmail: data.email,
        userPassword: data.password,
        userToken: data.token,
      }
  }
  return state
}
