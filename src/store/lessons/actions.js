import {ACTION_GET_AUTHOR_NAME} from "../books/actions";
import {ACTION_GET_DATA_USER} from "../auth/actions";

export const ACTION_CREATE_LESSON = "ACTION_CREATE_LESSON"
export const ACTION_GET_LESSON = "ACTION_GET_LESSON"
export const ACTION_GET_DATA_TEACHER = "ACTION_GET_DATA_TEACHER"
export const ACTION_SEND_ESSAY = "ACTION_SEND_ESSAY"
export const ACTION_GET_CHECK_LIST_ESSAYS = "ACTION_GET_CHECK_LIST_ESSAYS"
export const ACTION_SET_SCORE_STUDENT = "ACTION_SET_SCORE_STUDENT"
export const ACTION_UPDATE_CHECK_ESSAYS = "ACTION_UPDATE_CHECK_ESSAYS"


export const createTopic = (
    title,
    type,
    topics,
    teacher_id,
    start_time,
    end_time,
    comment,
) => {

    return {
        type: ACTION_CREATE_LESSON,
        rest: "/create_lesson/",
        method:"POST",
        query: {
            title: title,
            type: type,
            topics: topics,
            comment: comment,
            start_time: start_time,
            end_time: end_time,
            teacher_id: teacher_id,
        },
    }
}


export const getLesson = (
    id
) => {
    return {
        type: ACTION_GET_LESSON,
        rest: "/get_lesson/"+id,
        method: "GET",
        query: null,
    }
}

export const getTeacher = (
    token
) => {
    return {
        type: ACTION_GET_DATA_TEACHER,
        rest: "/user/"+token,
        method:"GET",
        query: null,
    }
}

export const sendEssay = (
    student_id,
    topic,
    text,
    comment,
    lesson_id,
    teacher_id,
) => {
    return {
        type: ACTION_SEND_ESSAY,
        rest: "/send_essay/",
        method: "POST",
        query: {
            topic: topic,
            student_id: student_id,
            text:text,
            lesson_id: lesson_id,
            comment: comment,
            teacher_id: teacher_id,
        },
    }
}

export const getCheckListEssays = (id) => {
    return {
        type: ACTION_GET_CHECK_LIST_ESSAYS,
        rest: "/get_check_essays/"+id,
        method:"GET",
        query: null,
    }
}

export const setScoreStudent = (
    teacher_id,
    teacher_text,
    score,
    essay_id,
    check,
    ) => {
    return {
        type: ACTION_SET_SCORE_STUDENT,
        rest: "/set_score_student/",
        method: "POST",
        query: {
            teacher_id: teacher_id,
            teacher_text: teacher_text,
            score: score,
            essay_id: essay_id,
            check: check,
        }
    }
}

// export const updateCheckStudent = (
//     essay_id,
//     teacher_text,
//     score
// ) => {
//     return {
//         type: ACTION_UPDATE_CHECK_ESSAYS,
//         rest: "/update_check_essay/",
//         method: null,
//         payload: {
//             essay_id: essay_id,
//             teacher_text: teacher_text,
//             score: score,
//             check: "in_progress",
//         }
//     }
// }