export const ACTION_GET_DATA_OF_BOOK = "ACTION_GET_DATA_OF_BOOK";
export const ACTION_GET_TEXT_OF_BOOK = "ACTION_GET_TEXT_OF_BOOK";
export const ACTION_GET_DATA_OF_BOOK_SUCCESS = 'ACTION_GET_DATA_OF_BOOK_SUCCESS';
export const ACTION_GET_DATA_OF_BOOK_FAIL = 'ACTION_GET_DATA_OF_BOOK_FAIL';

export const getDataBook = (link_of_book) => {
    return {
        type:ACTION_GET_DATA_OF_BOOK,
        rest: "/book/link=Hello_world",
        method: "GET",
        query: link_of_book,
    }
}

export const getTextOfBook = (link_of_book) => {
    return {
        type:ACTION_GET_TEXT_OF_BOOK,
        payload: link_of_book,
    }
}

// export const changeSecondName = (newSecondName) => {
//     return {
//         type:ACTION_CHANGE_SECOND_NAME,
//         payload: newSecondName,
//     }
// }
