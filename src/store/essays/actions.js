export const ACTION_GET_USER_ESSAY = 'ACTION_GET_USER_ESSAY'

export const getUserEssay = (id) => {
  return {
    type: ACTION_GET_USER_ESSAY,
    rest: '/get_essay/' + id,
    method: 'GET',
    query: null,
  }
}
