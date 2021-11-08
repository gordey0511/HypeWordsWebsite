import { NAVBAR_TITLE } from '../../utils/constants'
import { ACTION_UPDATE_NAVBAR } from './actions'

const initialState = {
  current_text: NAVBAR_TITLE.Home,
}

export const navbarReducer = (state = initialState, action) => {
  const data = action.payload
  switch (action.type) {
    case ACTION_UPDATE_NAVBAR:
      return { ...state, current_text: data }
  }
  return state
}
