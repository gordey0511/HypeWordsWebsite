import {ACTION_GET_AUTHOR_NAME} from "../books/actions";

export const ACTION_GET_POSTS = "ACTION_GET_POSTS"
export const ACTION_GET_POST = "ACTION_GET_POST"
export const ACTION_CREATE_POSTS = "ACTION_CREATE_POSTS"
export const ACTION_GET_AUTHOR_NAME_LIST_POST = "ACTION_GET_AUTHOR_NAME_LIST_POST"
export const ACTION_GET_AUTHORS_POSTS = "ACTION_GET_AUTHORS_POSTS"

export const createPost = (
    title,
    text,
    author_id,
    type
) => {
    console.log("USER ID "+author_id)
    return {
        type: ACTION_CREATE_POSTS,
        rest: "/create_post/",
        method:"POST",
        query: {
            "title": title,
            "text": text,
            "author_id": author_id,
            "type": type,
            "time_pub": 228,
            "likes": 0,
            "likes_users": [],
            "comments": [],
        },
    }
}

export const getPosts = () => {
    return {
        type: ACTION_GET_POSTS,
        rest: "/posts/",
        method: "GET",
        query: null,
    }
}

export const getPost = (id) => {
    return {
        type: ACTION_GET_POST,
        rest: "/post/"+id,
        method: "GET",
        query: null,
    }
}

export const getAuthorNamePost = (post_id,id) => {
    return{
        type: ACTION_GET_AUTHOR_NAME,
        rest: "/post/"+post_id+"/author_name/"+id,
        method:"GET",
        query:null,
    }
}

export const getAuthorPosts = (token) => {
    return{
        type: ACTION_GET_AUTHORS_POSTS,
        rest: "/posts_of_user/"+token,
        method:"GET",
        query:null,
    }
}
export const getAuthorNameListPost = (post_id,id) => {
    return{
        type: ACTION_GET_AUTHOR_NAME_LIST_POST,
        rest: "/post/"+post_id+"/author_name/"+id,
        method:"GET",
        query:null,
    }
}