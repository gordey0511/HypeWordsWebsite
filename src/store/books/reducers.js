import {
    ACTION_ADD_FAVORITE_BOOK,
    ACTION_DELETE_FAVORITE_BOOK,
    ACTION_GET_AUTHOR_NAME,
    ACTION_GET_DATA_OF_ALL_BOOKS,
    ACTION_GET_DATA_OF_BOOK, ACTION_GET_SEARCH_RESULT_BOOK,
    ACTION_GET_TEXT_OF_BOOK, ACTION_IS_FAVORITE_BOOK,
    ACTION_GET_UPDATE_SEARCH_RESULT_BOOK, ACTION_GET_WORDS_BOOK, ACTION_GET_SIMILAR_AUTHOR, ACTION_GET_WORDS_USER,
} from "./actions";
import {ObjectId} from "bson";
import {FAIL, START, SUCCESS} from "../reducers";

const initialState = {
    isLoading: false,
    name: "",
    authorName: "",
    link_of_author: "",
    year_published: "",
    link_of_text: "",
    isFavorite: false,
    isLoadingWords:false,
    similarAuthor: "",
    section: [],
    words: [],
    books: [],
    text_book: [],
};

export const booksReducer = (state=initialState,action) => {
    const data = action.payload;
    console.log("BOOKS REDUCER "+action.type+" "+data)
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
        case ACTION_GET_TEXT_OF_BOOK+START:
            return {
                ...state,
                isLoading: true,
            }
        case ACTION_GET_TEXT_OF_BOOK+SUCCESS:
            return {
                ...state,
                text_book: data,
                isLoading: false,
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
                isLoading: false,
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
        case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK+SUCCESS:
            return {
                ...state,
                // isLoading: false,
                books: state.books.concat(data),
            }
        case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK+FAIL:
            return {
                ...state,
            }
        case ACTION_GET_UPDATE_SEARCH_RESULT_BOOK+START:
            return {
                ...state,
                // isLoading: true,
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
        case ACTION_GET_WORDS_BOOK+START:
            console.log("COMPLETE "+ACTION_GET_WORDS_BOOK+START)
            return {
                ...state,
                isLoadingWords:true,
                words: [],
            }
        case ACTION_GET_WORDS_BOOK+SUCCESS:
            return {
                ...state,
                words: data,
                isLoadingWords:false,
            }
        case ACTION_GET_SIMILAR_AUTHOR+SUCCESS:
            return {
                ...state,
                similarAuthor: data,
            }
        case ACTION_GET_WORDS_USER+SUCCESS:
            return {
                ...state,
                words: data,
            }

    }
    return state;
}