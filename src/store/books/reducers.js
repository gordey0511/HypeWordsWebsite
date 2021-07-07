import {
    ACTION_ADD_FAVORITE_BOOK,
    ACTION_DELETE_FAVORITE_BOOK,
    ACTION_GET_AUTHOR_NAME,
    ACTION_GET_DATA_OF_ALL_BOOKS,
    ACTION_GET_DATA_OF_BOOK, ACTION_GET_SEARCH_RESULT_BOOK,
    ACTION_GET_TEXT_OF_BOOK, ACTION_IS_FAVORITE_BOOK
} from "./actions";
import {ObjectId} from "bson";
import {FAIL, START, SUCCESS} from "../reducers";

const initialState = {
    isLoading: false,
    name: "test",
    authorName: "",
    link_of_author: "",
    year_published: "",
    link_of_text: "",
    isFavorite: false,
    section: [],
    array_of_words: [],
    books: [],
    text_book: [],
};

export const booksReducer = (state=initialState,action) => {
    const data = action.payload;
    // console.log("BOOKS REDUCER "+action.type+" "+data)
    switch(action.type){
        case ACTION_GET_DATA_OF_BOOK+SUCCESS:
            return {...state,
                isLoading: false,
                name:data.name,
                year_published: data.year_published,
                link_of_text: data.link,
                link_of_author: data.author_id,
                section: data.section,
            }
        case ACTION_GET_DATA_OF_BOOK+START:
            return {...state,
                isLoading: true,
                // name:"",
                // year_published: "",
                // link_of_text: "",
                // link_of_author: "",
                // section: "",
                // authorName: "",
            }
        case ACTION_GET_DATA_OF_BOOK+FAIL:
            return {...state,
            }
        case ACTION_GET_TEXT_OF_BOOK+SUCCESS:
            return {
                ...state,
                text_book: data,
            }
        case ACTION_GET_DATA_OF_ALL_BOOKS+SUCCESS:
            return {
                ...state,
                books: data,
            }
        case ACTION_GET_AUTHOR_NAME+SUCCESS:
            return {
                ...state,
                authorName: data,
            }
        case ACTION_GET_SEARCH_RESULT_BOOK+SUCCESS:
            return {
                ...state,
                books: data,
            }
        case ACTION_GET_SEARCH_RESULT_BOOK+FAIL:
            return {
                ...state,
            }
        case ACTION_GET_SEARCH_RESULT_BOOK+START:
            return {
                ...state,
                isLoading: true,
            }

        case ACTION_IS_FAVORITE_BOOK+SUCCESS:
            return {
                ...state,
                isFavorite: data.isFavorite,
            }

        case ACTION_ADD_FAVORITE_BOOK+SUCCESS:
            return {
                ...state,
                isFavorite: true,
            }
        case ACTION_DELETE_FAVORITE_BOOK+SUCCESS:
            return {
                ...state,
                isFavorite: false,
            }


    }
    return state;
}