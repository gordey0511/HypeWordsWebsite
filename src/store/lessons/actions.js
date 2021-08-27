import {ACTION_GET_AUTHOR_NAME} from "../books/actions";
import {ACTION_GET_DATA_USER} from "../auth/actions";

export const ACTION_CREATE_LESSON = "ACTION_CREATE_LESSON"
export const ACTION_GET_LESSON = "ACTION_GET_LESSON"
export const ACTION_GET_DATA_TEACHER = "ACTION_GET_DATA_TEACHER"
export const ACTION_SEND_ESSAY = "ACTION_SEND_ESSAY"


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
        },
    }
}