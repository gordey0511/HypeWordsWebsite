import {FAIL, START, SUCCESS} from "../reducers";
import {
    ACTION_CREATE_LESSON,
    ACTION_GET_CHECK_LIST_ESSAYS,
    ACTION_GET_DATA_TEACHER,
    ACTION_GET_LESSON
} from "./actions";

const initialState = {
    token_new_lesson: "",
    token: "",
    teacherName: "",
    teacher_id: "",
    title: "",
    students: {},
    topic: {},
    start_time: 0,
    end_time: 0,
    comment: "",
    check_list_essays: [],
}

export const lessonsReducer = (state=initialState, action) => {
    const data = action.payload;
    console.log("LESSONS REDUCER "+action.type+" "+data)
    switch(action.type){
        case ACTION_CREATE_LESSON+START:
            return {...state,
                token_new_lesson: "",
            }
        case ACTION_CREATE_LESSON+SUCCESS:
            return {...state,
                token_new_lesson: data,
            }
        case ACTION_GET_LESSON+START:
            return {
                ...state,
                token: "",
                teacherName: "",
                teacher_id: "",
                title:"",
                topic: {},
                start_time: 0,
                end_time: 0,
                comment: "",
            }
        case ACTION_GET_LESSON+ SUCCESS:
            return {
                ...state,
                token: data.token,
                title: data.title,
                topic: data.topic,
                students: data.students,
                teacher_id: data.teacher_id,
                start_time: data.start_time,
                end_time: data.end_time,
                comment: data.comment,
            }
        case ACTION_GET_DATA_TEACHER + START:
            return {
                ...state,
                teacherName: "",
            }
        case ACTION_GET_DATA_TEACHER + SUCCESS:
            return {
                ...state,
                teacherName: data.name,
            }

        case ACTION_GET_CHECK_LIST_ESSAYS+START:
            return {
                ...state,
                check_list_essays: [],
            }

        case ACTION_GET_CHECK_LIST_ESSAYS+SUCCESS:
            return {
                ...state,
                check_list_essays: data,
            }
    }
    return state;
}