import { createSlice } from '@reduxjs/toolkit'
import {
  ACTION_CREATE_LESSON,
  ACTION_GET_CHECK_LIST_ESSAYS,
  ACTION_GET_DATA_TEACHER,
  ACTION_GET_LESSON,
  ACTION_SET_SCORE_STUDENT,
  ACTION_UPDATE_CHECK_ESSAYS,
} from './actions'
import { START, SUCCESS } from '../constants'

const lessonInitialState = {
  token_new_lesson: '',
  token: '',
  teacherName: '',
  teacher_id: '',
  title: '',
  students: {},
  topic: {},
  start_time: 0,
  end_time: 0,
  comment: '',
  check_list_essays: [],
}

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: lessonInitialState,
  reducers: {
    increment: (state, action) => {
      state.title = action.payload.title
    },
    [ACTION_CREATE_LESSON + START]: (state) => {
      state.token_new_lesson = ''
    },
    [ACTION_CREATE_LESSON + SUCCESS]: (state, action) => {
      state.token_new_lesson = action.payload
    },
    [ACTION_GET_LESSON + START]: (state) => {
      return lessonInitialState
    },
    [ACTION_GET_LESSON + SUCCESS]: (state, action) => {
      const {
        token,
        title,
        topic,
        students,
        teacher_id,
        start_time,
        end_time,
        comment,
      } = action.payload

      state.token = token
      state.title = title
      state.topic = topic
      state.students = students
      state.teacher_id = teacher_id
      state.start_time = start_time
      state.end_time = end_time
      state.comment = comment
    },
    [ACTION_GET_DATA_TEACHER + START]: (state) => {
      state.teacher_name = ''
    },
    [ACTION_GET_DATA_TEACHER + SUCCESS]: (state, action) => {
      state.teacher_name = action.payload.name
    },
    [ACTION_GET_CHECK_LIST_ESSAYS + START]: (state) => {
      state.check_list_essays = []
    },
    [ACTION_GET_CHECK_LIST_ESSAYS + SUCCESS]: (state, action) => {
      state.check_list_essays = action.payload
    },
    //todo: my be need "+SUCCESS"
    [ACTION_UPDATE_CHECK_ESSAYS]: (state, action) => {
      const { essay_id, teacher_text, score } = action.payload
      state.check_list_essays = state.check_list_essays.map((essay) => {
        if (essay._id === essay_id) {
          return { ...essay, teacher_text, score }
        }
        return essay
      })
    },
    [ACTION_SET_SCORE_STUDENT + SUCCESS]: (state, action) => {
      const { _id, teacher_text, score, check, teacher_id } = action.payload
      state.check_list_essays = state.check_list_essays.map((essay) => {
        if (essay._id === _id) {
          return { ...essay, teacher_text, score, check, teacher_id }
        }
        return essay
      })
    },
  },
})

export const lessonsReducer = lessonSlice.reducer
