export const ACTION_CHANGE_TEXT = 'ACTION_CHANGE_TEXT';

export const changeText = (text) => {
    return {
        type:ACTION_CHANGE_TEXT,
        payload: text,
    }
}