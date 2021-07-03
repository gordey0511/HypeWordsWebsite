import  {combineReducers} from "redux";
import {booksReducer} from "./books/reducers"
import {authorsReducer} from "./authors/reducers";
import {profileReducer} from "./profile/reducers";
import {analyzeReducer} from "./analyze/reducers";
import {navbarReducer} from "./navbar/reducers";
import {loginReducer} from "./login/reducers";

export default  combineReducers({
    analyze: analyzeReducer,
    books: booksReducer,
    authors: authorsReducer,
    profile: profileReducer,
    navbar: navbarReducer,
    login: loginReducer,
})