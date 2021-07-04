import {ACTION_GET_DATA_OF_AUTHOR} from "../actions";
import {ACTION_GET_DATA_OF_ALL_AUTHORS} from "./actions";
import {SUCCESS} from "../reducers";

const initialState = {
    name : "Test Test Test",
    about:"",
    profile: null,
    date_of_live: "",
    section:"",
    books:[],
    place_of_live:"",
    authors: [],
};

export const authorsReducer = (state=initialState,action) => {
    const data = action.payload;

    switch(action.type){
        case ACTION_GET_DATA_OF_AUTHOR+SUCCESS:
            return {
                ...state,
                name:data.name,
                about:data.about,
                date_of_live:data.date_of_live,
                place_of_live:data.place_of_live,
                books:data.books,
                section: data.section,
            }
        case ACTION_GET_DATA_OF_ALL_AUTHORS+SUCCESS:
            return {
                ...state,
                authors: data,
            }
    }
    return state;
}