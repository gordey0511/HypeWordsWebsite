import React, {useEffect, useState} from "react";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {bindActionCreators} from "redux";
import {getLesson, getTeacher, sendEssay} from "../../store/lessons/actions";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {CommonDialog} from "../../components/molecules/Dialogs/CommonDialog";
import {TextCKEditor} from "../../components/atoms/TextsInput/TextCKEditor";
import {NeedRegistration} from "../../components/molecules/Problems/NeedRegistration";
import {LessonNotStarted} from "../../components/molecules/Problems/LessonNotStarted";
import {LessonFinished} from "../../components/molecules/Problems/LessonFinished";
import {CommonSelect} from "../../components/atoms/Selects/CommonSelect";
import {CommonSelect2} from "../../components/atoms/Selects/CommonSelect2";

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
    let dateNow = new Date();

    useEffect(() => {
        console.log("TOKEN "+token)
        getLesson(token)
    },[token])

    // useEffect(() => {
    //     setText(topic)
    // },[topic])

    const getStringDate = (currentTimestamp) => {
        let dateStr = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp) // 01/11/2021
        console.log("UPDATE PARAM 2 "+dateStr)
        return dateStr
    }

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

    const [errorComponent,setErrorComponent] = useState(null);
    useEffect(() => {
        let timestampNow = Number(Number(dateNow.getTime())/1000);
        console.log("UPDATE PARAM ",student_id,start_time, timestampNow,end_time)
        if(student_id===undefined||student_id===""){
            setErrorComponent(<NeedRegistration/>)
        }else if(start_time!==undefined&&timestampNow<start_time){
            setErrorComponent(<LessonNotStarted
                date={getStringDate(start_time*1000)}
                name = {Title}
            />)
        }
        else if(end_time!==undefined&&(end_time!==0&&timestampNow>end_time)){
            setErrorComponent(<LessonFinished
                date={getStringDate(end_time*1000)}
                name = {Title}
            />)
        }else{
            setErrorComponent(null)
        }

    },[student_id,start_time,end_time])


    const [choiceTopics, setChoiceTopics] = useState(null)
    useEffect(() => {
        if(topic.type !== undefined){
            console.log("ARRAY "+topic.topics)
            if(topic.type === "free") {
                setChoiceTopics(<TextFieldMaterial
                    styles={{marginBottom: 10, fontSize: 45}}
                    label={"Тема сочинения"}
                    disabled={false}
                    value={title}
                    changeValue={handleTitle}
                />)
            }else if(topic.type === "free"){
                setChoiceTopics(<TextFieldMaterial
                        styles={{marginBottom: 10,fontSize: 45}}
                        label={title}
                        disabled={true}
                        value={title}
                        changeValue={handleTitle}
                    />
                )
            }else{
                setChoiceTopics(
                    <CommonSelect2
                        styles={{
                            marginTop: 20,
                            marginBottom: 0,
                            fontSize: 45,
                            width: 'auto',
                            justifyContent: 'left',
                            textAlign: 'center',
                        }}
                        label={"Выберете тему сочинения"}
                        array={topic.topics}
                        value={title}
                        handleChange={handleTitle}
                    />
                )
            }
        }
    },[topic,title])

    return (
        <div className={"center_block"} style={{width: '60%', display: "flex"}}>
            {
                (errorComponent === null)?
                    <div
                        style={{
                            display: "flex",
                            flexDirection: 'column',
                        }
                        }
                    >
                        <MainTitle text={Title}/>
                        <p style={{textAlign: "left", margin: 0,}}>
                            Преподаватель {teacherName}
                        </p>

                        {
                            choiceTopics
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

                        {/*<MultilineTextInput*/}
                        {/*    styles={{marginBottom: 20,}}*/}
                        {/*    label={"Комментарий учителю"}*/}
                        {/*    value={comment}*/}
                        {/*    rows = {1}*/}
                        {/*    helperText={"Необязательно"}*/}
                        {/*    changeValue={handleComment}*/}
                        {/*/>*/}

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
                    errorComponent
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