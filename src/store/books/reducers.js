import {
  ACTION_ADD_FAVORITE_BOOK,
  ACTION_DELETE_FAVORITE_BOOK,
  ACTION_GET_AUTHOR_NAME,
  ACTION_GET_DATA_OF_ALL_BOOKS,
  ACTION_GET_DATA_OF_BOOK,
  ACTION_GET_SEARCH_RESULT_BOOK,
  ACTION_GET_TEXT_OF_BOOK,
  ACTION_IS_FAVORITE_BOOK,
  ACTION_GET_UPDATE_SEARCH_RESULT_BOOK,
  ACTION_GET_WORDS_BOOK,
  ACTION_GET_SIMILAR_AUTHOR,
  ACTION_GET_WORDS_USER,
  ACTION_GET_SIMILAR_BOOKS,
} from './actions'
import { FAIL, START, SUCCESS } from '../constants'

const initialState = {
  name: '',
  authorName: '',
  link_of_author: '',
  year_published: '',
  link_of_text: '',
  isFavorite: false,
  isLoading: false,
  similarAuthor: '',
  similarBooks: [],
  section: [],
  words: [],
  books: [],
  text_book: [],
  statistic: [],
}

export const booksReducer = (state = initialState, action) => {
  const data = action.payload
  console.log('BOOKS REDUCER ' + action.type + ' ' + data)
  switch (action.type) {
    case ACTION_GET_DATA_OF_BOOK + SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: data.name,
        year_published: data.year_published,
        link_of_text: data.link,
        link_of_author: data.author_id,
        section: data.section,
        statistic: data.statistic,
      }
    case ACTION_GET_DATA_OF_BOOK + START:
      return {
        ...state,
        isLoading: true,
        // name:"",
        // year_published: "",
        // link_of_text: "",
        // link_of_author: "",
        // section: "",
        // authorName: "",
      }
    case ACTION_GET_DATA_OF_BOOK + FAIL:
      return { ...state, isLoading: false }
    case ACTION_GET_TEXT_OF_BOOK + START:
      return {
        ...state,
        // text_book: [],
        isLoading: true,
      }
    case ACTION_GET_TEXT_OF_BOOK + SUCCESS:
      return {
        ...state,
        text_book: state.text_book.concat(data),
        isLoading: false,
      }
    case ACTION_GET_DATA_OF_ALL_BOOKS + SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: data,
      }
    case ACTION_GET_AUTHOR_NAME + SUCCESS:
      return {
        ...state,
        authorName: data,
      }
    case ACTION_GET_SEARCH_RESULT_BOOK + SUCCESS:
      return {
        ...state,
        books: data,
        isLoading: false,
      }
    case ACTION_GET_SEARCH_RESULT_BOOK + FAIL:
      return {
        ...state,
      }
    case ACTION_GET_SEARCH_RESULT_BOOK + START:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK + SUCCESS:
      return {
        ...state,
        // isLoading: false,
        books: state.books.concat(data),
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK + FAIL:
      return {
        ...state,
      }
    case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK + START:
      return {
        ...state,
        // isLoading: true,
      }

    case ACTION_IS_FAVORITE_BOOK + SUCCESS:
      return {
        ...state,
        isFavorite: data.isFavorite,
      }

    case ACTION_ADD_FAVORITE_BOOK + SUCCESS:
      return {
        ...state,
        isFavorite: true,
      }
    case ACTION_DELETE_FAVORITE_BOOK + SUCCESS:
      return {
        ...state,
        isFavorite: false,
      }
    case ACTION_GET_WORDS_BOOK + START:
      console.log('COMPLETE ' + ACTION_GET_WORDS_BOOK + START)
      return {
        ...state,
        // isLoading: true,
        words: [],
      }
    case ACTION_GET_WORDS_BOOK + SUCCESS:
      return {
        ...state,
        words: data,
        // isLoading: false,
      }
    case ACTION_GET_SIMILAR_AUTHOR + SUCCESS:
      return {
        ...state,
        similarAuthor: data,
      }
    case ACTION_GET_SIMILAR_BOOKS + START:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_GET_SIMILAR_BOOKS + SUCCESS:
      return {
        ...state,
        similarBooks: data,
        isLoading: false,
      }
    case ACTION_GET_SIMILAR_BOOKS + FAIL:
      return {
        ...state,
        isLoading: false,
      }
    case ACTION_GET_WORDS_USER + SUCCESS:
      return {
        ...state,
        words: data,
      }
  }
  return state
}
