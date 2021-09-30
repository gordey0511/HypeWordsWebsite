import { ACTION_GET_DATA_OF_BOOK } from '../books/actions'
import { START, SUCCESS } from '../constants'
import { ACTION_GET_USER_ESSAY } from './actions'

const initialState = {
  topic: '',
  student_text: '',
  student_id: '',
  score: '',
  teacher_id: '',
  teacher_text: '',
  comment: '',
  check: '',
}

export const essaysReducer = (state = initialState, action) => {
  const data = action.payload
  console.log('ESSAYS REDUCER ' + action.type + ' ' + data)
  switch (action.type) {
    case ACTION_GET_USER_ESSAY + START:
      return {
        ...state,
        topic: '',
        student_text: '',
        student_id: '',
        score: 0,
        teacher_id: '',
        teacher_text: '',
        comment: '',
        check: '',
      }
    case ACTION_GET_USER_ESSAY + SUCCESS:
      return {
        ...state,
        topic: data.topic,
        student_text: data.student_text,
        student_id: data.student_id,
        score: data.score,
        teacher_id: data.teacher_id,
        teacher_text: data.teacher_text,
        comment: data.comment,
        check: data.check,
      }
  }

  return state
}
