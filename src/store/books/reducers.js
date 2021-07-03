import {ACTION_GET_DATA_OF_BOOK_FAIL, ACTION_GET_DATA_OF_BOOK_SUCCESS, ACTION_GET_TEXT_OF_BOOK} from "./actions";
import parse_book from "../../server/parse_book";

const initialState = {
    name: "test",
    author: "",
    link_of_author: "",
    date_of_publish: "",
    link_of_text: "",
    array_of_words: [],
    books: [
        {name:"Книга о Путине"},
        {name:"Книга о Обаме"},
        {name:"Книга о Навальном"},
        {name:"Книга о Меркельы"},
        {name:"Книга о Обаме"},
        {name:"Книга о Маске"},
        {name:"История игрушек"},
        {name:"История России"},
    ],
    text_book: [],
};

export const booksReducer = (state=initialState,action) => {
    const data = action.payload;
    console.log("BOOKS REDUCER "+action+" "+data)
    switch(action.type){
        case ACTION_GET_DATA_OF_BOOK_SUCCESS:
            //запрос к бд
            return {...state,
                name:data.name,
            }
        case ACTION_GET_DATA_OF_BOOK_FAIL:
            //запрос к бд
            return {...state,
            }
        case ACTION_GET_TEXT_OF_BOOK:
            const results = parse_book(data);

            return {
                ...state,
                text_book: results,
            }
    }
    return state;
}