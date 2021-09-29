import {FAIL, START, SUCCESS} from "../reducers";
import {
    ACTION_CREATE_USER,
    ACTION_GET_DATA_USER,
    ACTION_GET_FAVORITE_BOOKS, ACTION_GET_USER_LIST_ESSAYS,
    ACTION_LOGIN_USER,
    ACTION_LOGOUT_USER
} from "./actions";

const initialState = {
    name: "",
    email: "",
    password: "",
    token: "",
    error: "",
    favorites: [
        // {name:"Петя",id:"dsdsd"}
    ],

    essays: [

    ],
};

export const authReducer = (state=initialState,action) => {
    const data = action.payload;
    // console.log("AUTH REDUCER "+action.type+" "+data)
    switch(action.type){
        case ACTION_CREATE_USER+SUCCESS:
            localStorage.setItem("token",data.token)
            return {...state,
            name:data.name,
            email:data.email,
            password:data.password,
            token:data.token,
            error:"",
            }
        case ACTION_CREATE_USER+FAIL:
            return {...state,
            error:action.error,
            }
        case ACTION_LOGIN_USER+SUCCESS:
            localStorage.setItem("token",data.token)
            return {...state,
                name:data.name,
                email:data.email,
                password:data.password,
                token:data.token,
                error:"",
            }
        case ACTION_LOGIN_USER+FAIL:
            return {...state,
                error:action.error,
            }
        case ACTION_LOGOUT_USER+SUCCESS:
            localStorage.removeItem("token")
            return {
                token:"",
                name:"",
                email:"",
                password:"",
                error:"",
            }

        case ACTION_GET_DATA_USER+SUCCESS:
            return {
                ...state,
                name:data.name,
                email:data.email,
                password:data.password,
                token:data.token,
            }
        case ACTION_GET_FAVORITE_BOOKS+SUCCESS:
            return {
                ...state,
                favorites: data,
            }
        case ACTION_GET_USER_LIST_ESSAYS+START:
            return {
                ...state,
                essays: [],
            }
        case ACTION_GET_USER_LIST_ESSAYS+SUCCESS:
            return {
                ...state,
                essays: data,
            }
    }
    return state;
}