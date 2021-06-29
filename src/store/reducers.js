import  {combineReducers} from "redux";
import {booksReducer} from "./books/reducers"
import {authorsReducer} from "./authors/reducers";
import {profileReducer} from "./profile/reducers";

export default  combineReducers({
    books: booksReducer,
    authors: authorsReducer,
    profile: profileReducer,
})