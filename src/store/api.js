// type MiddleWareAPI = {disp
// type MiddleWare

import {BASE_URL} from "../utils/constants";

export const api = ({dispatch, getState}) => (next) => (action) => {
    console.log('API', action)
    if(!action.rest) {
        console.log("REST EMPTY")
        next(action)
        return ;
    }

    // const {token} = getState().auth;
    let headers = {
        'Content-Type': 'application/json',
    }
    // if(token) {
        headers = {
            ...headers,
            // Authorization: `Bearer ${token}`
        }
    // }
    const url = BASE_URL + action.rest

    console.log("FETCH "+url)
    next({
        ...action,
        type: action.type + '_START',
    })
    fetch(url, {
        method: action.method,
        //mode: 'no-cors',
        cache: 'no-cache',
        //credentials: 'same-origin',
        headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: action.method === 'GET' ? undefined : JSON.stringify(action.query),
    })
        .then(response => {
            if(response.status !== 200){
                next({
                    status: response.status,
                    error: response.error,
                    payload: response.message,
                    type: action.type + '_FAIL',
                    prevAction: action,
                })
            }else{
                return response.json();

            }
        })
        .then(data => {
        console.log(data)
        // if(data.status === 200) {
            next({
                payload: data,
                type: action.type + '_SUCCESS',
                prevAction: action,
            })
        // } else {
        //     next({
        //         status: data.status,
        //         error: data,
        //         type: action.type + '_FAIL',
        //         prevAction: action,
        //     })
        // }
    }).catch((error) => {
        next({
            status: 500,
            error: error,
            type: action.type + '_FAIL',
            prevAction: action,
        })
        console.log(error)
    })
}
