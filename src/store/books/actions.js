export const ACTION_GET_DATA_OF_BOOK = "ACTION_GET_DATA_OF_BOOK";
export const ACTION_GET_TEXT_OF_BOOK = "ACTION_GET_TEXT_OF_BOOK";
export const ACTION_GET_DATA_OF_ALL_BOOKS = "ACTION_GET_DATA_OF_ALL_BOOKS";
export const ACTION_GET_AUTHOR_NAME = "ACTION_GET_AUTHOR_NAME"
export const ACTION_GET_SEARCH_RESULT_BOOK = "ACTION_GET_SEARCH_RESULT_BOOK"
export const ACTION_IS_FAVORITE_BOOK = "ACTION_IS_FAVORITE_BOOK"
export const ACTION_ADD_FAVORITE_BOOK = "ACTION_ADD_FAVORITE_BOOK"
export const ACTION_DELETE_FAVORITE_BOOK = "ACTION_DELETE_FAVORITE_BOOK"


export const getDataBook = (token) => {
    return {
        type:ACTION_GET_DATA_OF_BOOK,
        rest: "/book/"+token,
        method: "GET",
        query: null,
    }
}

export const getTextOfBook = (token) => {
    return {
        type:ACTION_GET_TEXT_OF_BOOK,
        rest:"/book/"+token+"/text/",
        method:"GET",
        query:null,
    }
}

export const getAllBooks = (id) => {
    return {
        type: ACTION_GET_DATA_OF_ALL_BOOKS,
        rest: "/books/"+id,
        method:"GET",
        query: null,
    }
}

export const getAuthorName = (id) => {
    return {
        type: ACTION_GET_AUTHOR_NAME,
        rest: "/book/author_name/"+id,
        method:"GET",
        query:null,
    }
}

export const getSearchBookResult = (name) => {
    return {
        type: ACTION_GET_SEARCH_RESULT_BOOK,
        rest: "/books/s/",
        method:"POST",
        query:{"name":name},
    }
}

export const isFavoriteBook = (token,id) => {
    return {
        type: ACTION_IS_FAVORITE_BOOK,
        rest: "/user/"+token+"/check_book/"+id,
        method: "GET",
        query: null,
    }
}


export const addFavoriteBook = (token,id) => {
    return {
        type: ACTION_ADD_FAVORITE_BOOK,
        rest: "/user/"+token+"/add_book/"+id,
        method: "GET",
        query: null,
    }
}


export const deleteFavoriteBook = (token,id) => {
    return {
        type: ACTION_DELETE_FAVORITE_BOOK,
        rest: "/user/"+token+"/delete_book/"+id,
        method: "GET",
        query: null,
    }
}