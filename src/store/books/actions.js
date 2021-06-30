import {ACTION_GET_DATA_OF_BOOK} from "../actions";

export const getDataBook = (link_of_book) => {
    return {
        type:ACTION_GET_DATA_OF_BOOK,
        payload: link_of_book,
    }
}

// export const changeSecondName = (newSecondName) => {
//     return {
//         type:ACTION_CHANGE_SECOND_NAME,
//         payload: newSecondName,
//     }
// }
