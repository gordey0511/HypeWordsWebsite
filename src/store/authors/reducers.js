import { ACTION_GET_DATA_OF_AUTHOR } from '../actions'
import {
  ACTION_GET_DATA_OF_ALL_AUTHORS,
  ACTION_GET_SEARCH_RESULT_AUTHOR,
  ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR,
} from './actions'
import { FAIL, START, SUCCESS } from '../constants'
import {
  ACTION_GET_SEARCH_RESULT_BOOK,
  ACTION_GET_UPDATE_SEARCH_RESULT_BOOK,
} from '../books/actions'

const initialState = {
  name: '',
  about: '',
  profile: null,
  date_of_live: '',
  section: '',
  books: [],
  place_of_live: '',
  authors: [],
}

export const authorsReducer = (state = initialState, action) => {
  const data = action.payload

  switch (action.type) {
    case ACTION_GET_DATA_OF_AUTHOR + SUCCESS:
      return {
        ...state,
        name: data.name,
        about: data.about,
        date_of_live: data.date_of_live,
        place_of_live: data.place_of_live,
        books: data.books,
        section: data.section,
      }
    case ACTION_GET_DATA_OF_ALL_AUTHORS + SUCCESS:
      return {
        ...state,
        authors: data,
      }
    case ACTION_GET_SEARCH_RESULT_AUTHOR + SUCCESS:
      return {
        ...state,
        authors: data,
      }
    case ACTION_GET_SEARCH_RESULT_AUTHOR + FAIL:
      return {
        ...state,
      }
    case ACTION_GET_SEARCH_RESULT_AUTHOR + START:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR + SUCCESS:
      return {
        ...state,
        authors: state.authors.concat(data),
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR + FAIL:
      return {
        ...state,
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR + START:
      return {
        ...state,
        isLoading: true,
      }
  }
  return state
}
