import { combineReducers } from 'redux'
import { booksReducer } from './books/reducers'
import { authorsReducer } from './authors/reducers'
import { profileReducer } from './profile/reducers'
import { analyzeReducer } from './analyze/reducers'
import { navbarReducer } from './navbar/reducers'
import { authReducer } from './auth/reducers'
import { postsReducer } from './posts/reducers'
import { lessonsReducer } from './lessons/reducerV2'
import { essaysReducer } from './essays/reducers'

export const rootReducer = combineReducers({
  auth: authReducer,
  analyze: analyzeReducer,
  books: booksReducer,
  authors: authorsReducer,
  profile: profileReducer,
  navbar: navbarReducer,
  posts: postsReducer,
  lessons: lessonsReducer,
  essays: essaysReducer,
})
