import {
  ACTION_GET_AUTHOR_NAME_LIST_POST,
  ACTION_GET_AUTHORS_POSTS,
  ACTION_GET_POST,
  ACTION_GET_POSTS,
} from './actions'
import { FAIL, START, SUCCESS } from '../constants'
import { ACTION_GET_AUTHOR_NAME } from '../books/actions'

const initialState = {
  title: '',
  text: [],
  author_id: '',
  authorName: '',
  isLoading: false,
  likes: 0,
  posts: [],
  publication_time: 0,
}

export const postsReducer = (state = initialState, action) => {
  const data = action.payload
  let new_posts = []

  switch (action.type) {
    case ACTION_GET_POSTS + START:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_GET_POSTS + FAIL:
      return {
        ...state,
        isLoading: false,
      }
    case ACTION_GET_POSTS + SUCCESS:
      return {
        ...state,
        posts: data,
        isLoading: false,
      }

    case ACTION_GET_POST + SUCCESS:
      return {
        ...state,
        title: data.title,
        text: data.text,
        likes: data.likes,
        author_id: data.author_id,
        publication_time: data.publication_time,
      }

    case ACTION_GET_AUTHOR_NAME + SUCCESS:
      return {
        ...state,
        authorName: data.name,
      }
    case ACTION_GET_AUTHOR_NAME + FAIL:
      return {
        ...state,
        authorName: '',
      }
    case ACTION_GET_AUTHOR_NAME + START:
      return {
        ...state,
        authorName: '',
      }

    case ACTION_GET_AUTHOR_NAME_LIST_POST + SUCCESS:
      console.log('DATA ' + data.post_id)
      for (let i = 0; i < state.posts.length; i++) {
        console.log('POST ' + state.posts[i]._id)
        if (state.posts[i]._id === data.post_id) {
          console.log('GOOD')
          state.posts[i].authorName = data.authorName
        }

        new_posts.push(state.posts[i])
      }

      return {
        ...state,
        posts: new_posts,
      }
    case ACTION_GET_AUTHORS_POSTS + SUCCESS:
      return {
        ...state,
        posts: data,
      }
  }

  return state
}
