export const ACTION_GET_DATA_OF_BOOK = "ACTION_GET_DATA_OF_BOOK";
export const ACTION_GET_TEXT_OF_BOOK = "ACTION_GET_TEXT_OF_BOOK";
export const ACTION_GET_DATA_OF_ALL_BOOKS = "ACTION_GET_DATA_OF_ALL_BOOKS";
export const ACTION_GET_AUTHOR_NAME = "ACTION_GET_AUTHOR_NAME"

export const getDataBook = (token) => {
    return {
        type:ACTION_GET_DATA_OF_BOOK,
        rest: "/book/"+token,
        method: "GET",
        query: null,
    }
}

export const getTextOfBook = (link_of_book) => {
    return {
        type:ACTION_GET_TEXT_OF_BOOK,
        payload: link_of_book,
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