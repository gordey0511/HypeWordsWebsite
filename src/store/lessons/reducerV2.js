import { createReducer, createSlice } from '@reduxjs/toolkit'
import {
  ACTION_CREATE_LESSON,
  ACTION_GET_CHECK_LIST_ESSAYS,
  ACTION_GET_DATA_TEACHER,
  ACTION_GET_LESSON,
  ACTION_GET_LIST_LESSONS_USER,
  ACTION_SET_SCORE_STUDENT,
  ACTION_UPDATE_CHECK_ESSAYS,
} from './actions'
import { FAIL, START, SUCCESS } from '../constants'

const lessonInitialState = {
  isLoading: false,
  isLoadingListLessons: false,
  token_new_lesson: '',
  token: '',
  teacherName: '',
  teacher_id: '',
  title: '',
  score_names: [],
  students: {},
  topic: {},
  start_time: 0,
  publication_time: 0,
  end_time: 0,
  comment: '',
  check_list_essays: [],
  list_lessons: [],
}

export const lessonsReducer = createReducer(lessonInitialState, {
  [ACTION_CREATE_LESSON + START]: (state) => {
    state.token_new_lesson = ''
  },
  [ACTION_CREATE_LESSON + SUCCESS]: (state, action) => {
    state.token_new_lesson = action.payload
  },
  [ACTION_GET_LESSON + START]: (state) => {
    state.isLoading = true
  },
  [ACTION_GET_LESSON + FAIL]: (state) => {
    state.isLoading = false
  },
  [ACTION_GET_LESSON + SUCCESS]: (state, action) => {
    const {
      token,
      title,
      topic,
      students,
      teacher_id,
      start_time,
      teacherName,
      end_time,
      comment,
      publication_time,
      score_names,
    } = action.payload

    state.token = token
    state.title = title
    state.topic = topic
    state.students = students
    state.teacher_id = teacher_id
    state.start_time = start_time
    state.end_time = end_time
    state.comment = comment
    state.publication_time = publication_time
    state.score_names = score_names
    state.teacher_name = teacherName
    state.isLoading = false
  },
  [ACTION_GET_DATA_TEACHER + START]: (state) => {
    state.teacher_name = ''
  },
  [ACTION_GET_DATA_TEACHER + SUCCESS]: (state, action) => {
    state.teacher_name = action.payload.name
  },
  [ACTION_GET_CHECK_LIST_ESSAYS + START]: (state) => {
    state.check_list_essays = []
    state.isLoading = true
  },
  [ACTION_GET_CHECK_LIST_ESSAYS + FAIL]: (state, action) => {
    state.isLoading = false
  },
  [ACTION_GET_CHECK_LIST_ESSAYS + SUCCESS]: (state, action) => {
    state.isLoading = false
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
  [ACTION_GET_LIST_LESSONS_USER + START]: (state) => {
    state.isLoadingListLessons = true
    state.list_lessons = []
  },
  [ACTION_GET_LIST_LESSONS_USER + FAIL]: (state, action) => {
    state.isLoadingListLessons = false
  },
  [ACTION_GET_LIST_LESSONS_USER + SUCCESS]: (state, action) => {
    state.isLoadingListLessons = false
    state.list_lessons = action.payload
  },
})
