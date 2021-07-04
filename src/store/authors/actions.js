export const ACTION_GET_DATA_OF_ALL_AUTHORS = "ACTION_GET_DATA_OF_ALL_AUTHORS"
export const ACTION_GET_DATA_OF_AUTHOR = "ACTION_GET_DATA_OF_AUTHOR"

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