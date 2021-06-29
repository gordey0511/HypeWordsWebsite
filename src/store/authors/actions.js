import {ACTION_GET_DATA_OF_AUTHOR} from "../actions";


export const getDataAuthor = (link_of_author) => {
    console.log("ACTIONS GETAUTHOR " + link_of_author)
    return {
        type: ACTION_GET_DATA_OF_AUTHOR,
        payload: link_of_author,
    }
}