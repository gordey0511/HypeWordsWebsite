export const ACTION_UPDATE_NAVBAR = 'ACTION_UPDATE_NAVBAR'

export const update_navbar = (text_clicked) => {
  return {
    type: ACTION_UPDATE_NAVBAR,
    payload: text_clicked,
  }
}
