import React, {useEffect, useState} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {bindActionCreators} from "redux";
import {getLesson, getTeacher, sendEssay} from "../../store/lessons/actions";
import {connect} from "react-redux";
import {getUser} from "../../store/auth/actions";

const SendEssay = ({
    Title,
    teacherName,
    teacher_id,
    student_id,
    type,
    topic,
    start_time,
    end_time,
    commentTeacher,
    getLesson,
    getTeacher,
    sendEssay,
                          }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [comment, setComment] = useState("");

    const link = window.location.pathname
    const token = link.substr(12,link.length-12)

    useEffect(() => {
        console.log(token)
        getLesson(token)
    },[])

    useEffect(() => {
        if(teacher_id!==undefined && teacher_id !== ""){
            getTeacher(teacher_id)
        }
    }, [teacher_id])

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleButton = () => {
        sendEssay(student_id, title, text, comment, token)
    }

    return (
        <div className={"center_block"} style={{width: '66%', display: "flex"}}>
            <MainTitle text={Title}/>
            <text style={{textAlign: "left"}}>
                Преподаватель {teacherName}
            </text>

            {
                (topic.type === "free")?
                    <TextFieldMaterial
                        styles={{marginBottom: 10,fontSize: 45}}
                        label={"Тема сочинения"}
                        disabled={false}
                        value={title}
                        changeValue={handleTitle}
                    />
                :
                    <TextFieldMaterial
                        styles={{marginBottom: 10,fontSize: 45}}
                        label={topic.topics}
                        disabled={true}
                        value={title}
                        changeValue={handleTitle}
                    />
            }
            <MultilineTextInput
                styles={{marginBottom: 20,}}
                label={"Текст сочинения"}
                value={text}
                rows = {30}
                changeValue={handleText}
            />

            <MultilineTextInput
                styles={{marginBottom: 20,}}
                label={"Комментарий учителю"}
                value={comment}
                rows = {1}
                helperText={"Необязательно"}
                changeValue={handleComment}
            />

            <ButtonMaterial
                text={"Отправить сочинение на проверку"}
                styles={{marginTop: 20,
                    marginBottom: 20,
                    width: '100%',
                    // height: 50,
                    // color: "#ffffff",
                    // background: "#d52222",
                }}
                color={"primary"}
                handleClick={handleButton}
            />
        </div>
    )
}

const putStateToProps = state => {
    return {
        student_id: state.auth.token,
        teacher_id: state.lessons.teacher_id,
        topic: state.lessons.topic,
        start_time: state.lessons.start_time,
        end_time: state.lessons.end_time,
        teacherName: state.lessons.teacherName,
        Title: state.lessons.title,
        commentTeacher: state.lessons.comment,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getLesson: bindActionCreators(getLesson, dispatch),
        getTeacher: bindActionCreators(getTeacher, dispatch),
        sendEssay: bindActionCreators(sendEssay, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(SendEssay);