import  {combineReducers} from "redux";
import {booksReducer} from "./books/reducers"
import {authorsReducer} from "./authors/reducers";

export default  combineReducers({
    books: booksReducer,
    authors: authorsReducer,
})