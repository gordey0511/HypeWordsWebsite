import {ACTION_GET_SEARCH_RESULT_BOOK, ACTION_GET_UPDATE_SEARCH_RESULT_BOOK} from "../books/actions";

export const ACTION_GET_DATA_OF_ALL_AUTHORS = "ACTION_GET_DATA_OF_ALL_AUTHORS"
export const ACTION_GET_DATA_OF_AUTHOR = "ACTION_GET_DATA_OF_AUTHOR"
export const ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR = "ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR";
export const ACTION_GET_SEARCH_RESULT_AUTHOR = "ACTION_GET_SEARCH_RESULT_AUTHOR"

export const getDataAuthor = (token_of_author) => {
    return {
        type: ACTION_GET_DATA_OF_AUTHOR,
        rest:"/author/"+token_of_author,
        method:"GET",
        query: null,
    }
}

export const getAllAuthors = (id) => {
    return {
        type: ACTION_GET_DATA_OF_ALL_AUTHORS,
        rest: "/authors/"+id,
        method:"GET",
        query: null,
    }
}

export const getSearchAuthorResult = (name,year_from,year_to,type) => {
    return {
        type: ACTION_GET_SEARCH_RESULT_AUTHOR,
        rest: "/authors/s/r/",
        method:"POST",
        query:{"name": name,
            "id": 1,
            "year_from": year_from,
            "year_to": year_to,
            "type": type,
        },
    }
}

export const getUpdateSearchAuthorResult = (name,id,year_from,year_to,type) => {
    return {
        type: ACTION_GET_UPDATE_SEARCH_RESULT_AUTHOR,
        rest: "/authors/s/r/",
        method:"POST",
        query:{"name": name,
            "id": id,
            "year_from": year_from,
            "year_to": year_to,
            "type": type,
        },
    }
}