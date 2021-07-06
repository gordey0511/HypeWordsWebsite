export const ACTION_CREATE_USER = 'ACTION_REGISTER_USER';
export const ACTION_LOGIN_USER = 'ACTION_LOGIN_USER';
export const ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER';
export const ACTION_GET_DATA_USER = "ACTION_GET_DATA_USER";


export const createUser = (name,email,password) => {
    return {
        type: ACTION_CREATE_USER,
        rest: "/register",
        method: "POST",
        query: {"name":name,"email":email,"password":password},
    }
}

export const loginUser = (email,password) => {
    return {
        type: ACTION_LOGIN_USER,
        rest: "/login",
        method: "POST",
        query: {"email":email,"password":password},
    }
}

export const logOut = () => {
    return {
        type: ACTION_LOGOUT_USER,
    }
}

export const getDataUser = (token) => {
    return {
        type: ACTION_GET_DATA_USER,
        rest: "/user/"+token,
        method:"GET",
        query: null,
    }
}