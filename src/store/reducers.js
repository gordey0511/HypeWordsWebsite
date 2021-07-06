import  {combineReducers} from "redux";
import {booksReducer} from "./books/reducers"
import {authorsReducer} from "./authors/reducers";
import {profileReducer} from "./profile/reducers";
import {analyzeReducer} from "./analyze/reducers";
import {navbarReducer} from "./navbar/reducers";
import {authReducer} from "./auth/reducers";

export const SUCCESS = "_SUCCESS";
export const FAIL = "_FAIL";
export const START = "_START";

export default  combineReducers({
    analyze: analyzeReducer,
    books: booksReducer,
    authors: authorsReducer,
    profile: profileReducer,
    navbar: navbarReducer,
    auth: authReducer,
})