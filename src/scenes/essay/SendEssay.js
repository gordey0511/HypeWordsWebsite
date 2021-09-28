import React, {useEffect, useState} from "react";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {bindActionCreators} from "redux";
import {getLesson, getTeacher, sendEssay} from "../../store/lessons/actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {CommonDialog} from "../../components/molecules/Dialogs/CommonDialog";
import {TextCKEditor} from "../../components/atoms/TextsInput/TextCKEditor";
import {NeedRegistration} from "../../components/molecules/NeedRegistration";

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
    const [openSubmitted, setOpenSubmitted] = useState(false)

    const link = window.location.pathname
    const token = link.substr(12,link.length-12)
    const history = useHistory()

    useEffect(() => {
        console.log(token)
        getLesson(token)
    },[token])

    useEffect(() => {
        setText(topic)
    },[topic])

    useEffect(() => {
        if(teacher_id!==undefined && teacher_id !== ""){
            getTeacher(teacher_id)
        }
    }, [teacher_id])

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleText = (data) => {
        setText(data)
    }

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleCloseDialogs = () => {
        setOpenSubmitted(false);
        history.push("/")
    };

    const handleButton = () => {
        sendEssay(student_id, title, text, comment, token, teacher_id)
        setOpenSubmitted(true)
    }

    return (
        <div className={"center_block"} style={{width: '60%', display: "flex"}}>
            {
                (student_id!==undefined&&student_id!=="")?
                    <div>
                        <MainTitle text={Title}/>
                        <p style={{textAlign: "left", margin: 0,}}>
                            Преподаватель {teacherName}
                        </p>

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
                                    label={title}
                                    disabled={true}
                                    value={title}
                                    changeValue={handleTitle}
                                />
                        }
                        <TextCKEditor
                            style={{
                                marginBottom: 20,
                                marginTop:30,}}
                            label={"Текст сочинения"}
                            value={text}
                            rows={51}
                            changeValue={handleText}
                            placeholder={"Напишите сочинение..."}
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
                                marginBottom: 50,
                                width: '100%',
                                // height: 50,
                                // color: "#ffffff",
                                // background: "#d52222",
                            }}
                            color={"primary"}
                            handleClick={handleButton}
                        />

                        <CommonDialog
                            open = {openSubmitted}
                            title = {"Вы успешно отправили сочинение!"}
                            text = {"В ближайшее время ваше сочинение проверит преподаватель. Следите за почтой"}
                            handleClose = {handleCloseDialogs}
                            buttons = {
                                [
                                    {
                                        text: "Закрыть",
                                        handleClick: handleCloseDialogs,
                                    },
                                    {
                                        text: "Посмотреть",
                                        handleClick: handleCloseDialogs,
                                    },
                                ]
                            }
                        />
                    </div>
                    :
                    <NeedRegistration/>
            }
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