export const ACTION_GET_DATA_OF_BOOK = "ACTION_GET_DATA_OF_BOOK";
export const ACTION_GET_TEXT_OF_BOOK = "ACTION_GET_TEXT_OF_BOOK";
export const ACTION_GET_DATA_OF_ALL_BOOKS = "ACTION_GET_DATA_OF_ALL_BOOKS";
export const ACTION_GET_AUTHOR_NAME = "ACTION_GET_AUTHOR_NAME";
export const ACTION_GET_SEARCH_RESULT_BOOK = "ACTION_GET_SEARCH_RESULT_BOOK";
export const ACTION_GET_UPDATE_SEARCH_RESULT_BOOK = "ACTION_GET_UPDATE_SEARCH_RESULT_BOOK";

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

export const getSearchBookResult = (name) => {
    return {
        type: ACTION_GET_SEARCH_RESULT_BOOK,
        rest: "/books/s/",
        method:"POST",
        query:{"name": name,
                "id": 1},
    }
}

export const getUpdateSearchBookResult = (name,id) => {
    return {
        type: ACTION_GET_UPDATE_SEARCH_RESULT_BOOK,
        rest: "/books/s/r/",
        method:"POST",
        query:{"name": name,
                "id": id},
    }
}