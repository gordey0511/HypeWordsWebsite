import { FAIL, START, SUCCESS } from '../constants'
import {
  ACTION_CREATE_USER,
  ACTION_GET_DATA_USER,
  ACTION_GET_DATA_USER_INF,
  ACTION_GET_FAVORITE_BOOKS,
  ACTION_GET_USER_LIST_ESSAYS,
  ACTION_LOGIN_USER,
  ACTION_LOGOUT_USER,
} from './actions'

const initialState = {
  name: '',
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
  // console.log("AUTH REDUCER "+action.type+" "+data)
  switch (action.type) {
    case ACTION_CREATE_USER + SUCCESS:
      // localStorage.removeItem("userToken")
      // localStorage.removeItem("userName")
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userName', data.name)
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
      // localStorage.removeItem("userToken")
      // localStorage.removeItem("userName")
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userName', data.name)
      return {
        ...state,
        name: data.name,
        email: data.email,
        password: data.password,
        token: data.token,
        error: '',
      }
    case ACTION_LOGIN_USER + FAIL:
      return { ...state, error: action.error }
    case ACTION_LOGOUT_USER:
      localStorage.removeItem('userToken')
      localStorage.removeItem('userName')
      // localStorage.setItem("userToken","")
      // localStorage.setItem("userName","")
      console.log(localStorage)
      return {
        token: '',
        name: '',
        email: '',
        password: '',
        error: '',
      }
    case ACTION_GET_DATA_USER + SUCCESS:
      console.log('GET DATA USER ' + data.name)
      return {
        ...state,
        name: data.name,
        userName: data.name,
        email: data.email,
        password: data.password,
        token: data.token,
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
