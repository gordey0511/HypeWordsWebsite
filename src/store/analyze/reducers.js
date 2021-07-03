import {ACTION_CHANGE_TEXT} from "./actions";

const initialState = {
    text_input: "",
};

export const analyzeReducer = (state=initialState,action) => {
    const data = action.payload;
    switch(action.type){
        case ACTION_CHANGE_TEXT:
            return {...state,
            text_input: data}
    }
    return state;
}