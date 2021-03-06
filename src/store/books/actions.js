export const ACTION_GET_DATA_OF_BOOK = 'ACTION_GET_DATA_OF_BOOK'
export const ACTION_GET_TEXT_OF_BOOK = 'ACTION_GET_TEXT_OF_BOOK'
export const ACTION_GET_DATA_OF_ALL_BOOKS = 'ACTION_GET_DATA_OF_ALL_BOOKS'
export const ACTION_GET_AUTHOR_NAME = 'ACTION_GET_AUTHOR_NAME'
export const ACTION_GET_SEARCH_RESULT_BOOK = 'ACTION_GET_SEARCH_RESULT_BOOK'
export const ACTION_IS_FAVORITE_BOOK = 'ACTION_IS_FAVORITE_BOOK'
export const ACTION_ADD_FAVORITE_BOOK = 'ACTION_ADD_FAVORITE_BOOK'
export const ACTION_DELETE_FAVORITE_BOOK = 'ACTION_DELETE_FAVORITE_BOOK'
export const ACTION_GET_WORDS_BOOK = 'ACTION_GET_WORDS_BOOK'
export const ACTION_GET_UPDATE_SEARCH_RESULT_BOOK = 'ACTION_GET_UPDATE_SEARCH_RESULT_BOOK'
export const ACTION_GET_SIMILAR_AUTHOR = 'ACTION_GET_SIMILAR_AUTHOR'
export const ACTION_GET_WORDS_USER = 'ACTION_GET_WORDS_USER'
export const ACTION_GET_SIMILAR_BOOKS = 'ACTION_GET_SIMILAR_BOOKS'

export const getDataBook = (token) => {
  return {
    type: ACTION_GET_DATA_OF_BOOK,
    rest: '/book/' + token,
    method: 'GET',
    query: null,
  }
}

export const getTextOfBook = (token, id) => {
  return {
    type: ACTION_GET_TEXT_OF_BOOK,
    rest: '/book/' + token + '/text/' + id,
    method: 'GET',
    query: null,
  }
}

export const getAllBooks = (id) => {
  return {
    type: ACTION_GET_DATA_OF_ALL_BOOKS,
    rest: '/books/' + id,
    method: 'GET',
    query: null,
  }
}

export const getAuthorName = (id) => {
  return {
    type: ACTION_GET_AUTHOR_NAME,
    rest: '/book/author_name/' + id,
    method: 'GET',
    query: null,
  }
}

export const getSearchBookResult = (name, year_from, year_to, type) => {
  return {
    type: ACTION_GET_SEARCH_RESULT_BOOK,
    rest: '/books/s/r/',
    method: 'POST',
    query: { name: name, id: 1, year_from: year_from, year_to: year_to, type: type },
  }
}

export const getUpdateSearchBookResult = (name, id, year_from, year_to, type) => {
  return {
    type: ACTION_GET_UPDATE_SEARCH_RESULT_BOOK,
    rest: '/books/s/r/',
    method: 'POST',
    query: { name: name, id: id, year_from: year_from, year_to: year_to, type: type },
  }
}

export const isFavoriteBook = (token, id) => {
  return {
    type: ACTION_IS_FAVORITE_BOOK,
    rest: '/user/' + token + '/check_book/' + id,
    method: 'GET',
    query: null,
  }
}

export const addFavoriteBook = (token, id) => {
  return {
    type: ACTION_ADD_FAVORITE_BOOK,
    rest: '/user/' + token + '/add_book/' + id,
    method: 'GET',
    query: null,
  }
}

export const deleteFavoriteBook = (token, id) => {
  return {
    type: ACTION_DELETE_FAVORITE_BOOK,
    rest: '/user/' + token + '/delete_book/' + id,
    method: 'GET',
    query: null,
  }
}

export const getWordsBook = (token) => {
  return {
    type: ACTION_GET_WORDS_BOOK,
    rest: '/book/' + token + '/words/',
    method: 'GET',
    query: null,
  }
}

export const getSimilarAuthor = (text) => {
  return {
    type: ACTION_GET_SIMILAR_AUTHOR,
    rest: `/similar?text=${text}`,
    method: 'GET',
    query: null,
  }
}

export const getSimilarBooks = (text) => {
  return {
    type: ACTION_GET_SIMILAR_BOOKS,
    rest: `/similar_books?text=${text}`,
    method: 'POST',
    query: null,
  }
}

export const getUserWords = (text) => {
  return {
    type: ACTION_GET_WORDS_USER,
    rest: `/user_text`,
    method: 'POST',
    query: { text: text },
  }
}
