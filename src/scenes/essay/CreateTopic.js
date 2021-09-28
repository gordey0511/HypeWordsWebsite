import React, {useEffect, useState} from "react";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {TITLES} from "../../utils/titles";
import {CheckBox} from "../../components/atoms/Checkboxs/Checkbox";
import {bindActionCreators} from "redux";
import {createTopic} from "../../store/lessons/actions";
import {connect} from "react-redux";
import {NeedRegistration} from "../../components/molecules/NeedRegistration";
import {DialogNewLesson} from "../../components/molecules/Dialogs/DialogNewLesson";
import {CommonDialog} from "../../components/molecules/Dialogs/CommonDialog";
import {links} from "../../utils/links";
import {useHistory} from "react-router-dom";
import {CommonSnackbar} from "../../components/atoms/Snackbars/CommonSnackbar";

const CreateTopic = ({
                         user_id,
                         token_new_lesson,
                         createTopic,
                     }) => {
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [comment, setComment] = useState("");
    const  [checked, setChecked] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();

    useEffect(() => {
        token_new_lesson = ""
    },[])

    useEffect(() => {
        console.log("NEW TOKEN LESSON " + token_new_lesson)
        if( token_new_lesson !== undefined && token_new_lesson !== ""){
            setOpenDialog(true)
        }
    },[token_new_lesson])

    const handleChecked = (event) => {
        setChecked(!checked)
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleTopic = (event) => {
        setTopic(event.target.value)
    }

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleClose = () => {
        setOpenDialog(!openDialog)
        history.push("/profile")
    }

    const handleButton = () => {
        let type = "common"
        let date = new Date()
        console.log("TEACHER ID " + user_id)
        createTopic(
            title,
            type,
            [topic],
            user_id,
            date.getSeconds(),
            date.getSeconds(),
            comment,
        )
    }

    const handleClick = () => {
        setOpenSnackbar(true);
        navigator.clipboard.writeText(`${links.new_lesson}${token_new_lesson}`)
    }

    const handleClickSnackbar = () => {
        setOpenSnackbar(false)
    }

    return (
        <div className={"center_block"} style={{width: '66%', display: "flex"}}>
            {(user_id !== undefined && user_id !== "")
                ?
                <div className={"center_block"} style={{width: '100%', display: "flex"}}>
                    <MainTitle text={TITLES.CREATE_TOPIC}/>
                    <TextFieldMaterial
                        styles={{marginBottom: 20, fontSize: 45}}
                        label={"Название урока"}
                        value={title}
                        changeValue={handleTitle}
                    />
                    <TextFieldMaterial
                        styles={{marginBottom: 15, fontSize: 45}}
                        label={"Тема сочинения"}
                        value={topic}
                        setLabel={setTopic}
                        disabled={checked}
                        changeValue={handleTopic}
                    />

                    <CheckBox
                        styles={{
                            display: 'flex',
                            marginTop: 10,
                            width: 'auto',

                        }}
                        label={"Свободная тема"}
                        handleChange={handleChecked}
                        checked={checked}
                    />

                    <MultilineTextInput
                        styles={{
                            marginTop: 0,
                            marginBottom: 15,
                        }}
                        label={"Комментарий"}
                        value={comment}
                        rows={3}
                        helperText={"Будет виден ученикам"}
                        changeValue={handleComment}
                    />


                    <ButtonMaterial
                        text={"Создать"}
                        styles={{
                            marginTop: 20,
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
                :
                <NeedRegistration/>
            }

            <CommonDialog
                open = {openDialog}
                title={"Урок опубликован!"}
                text = {`Ссылка на урок </br><b><Link onclick={handleClick}>${links.new_lesson}${token_new_lesson}</Link></b></br> Отправьте ее своим ученикам`}
                handleClose={handleClose}
                buttons={[
                    {
                        text:"Закрыть",
                        handleClick: handleClose,
                    },
                    {
                        text:"Скопировать",
                        handleClick: handleClick,
                    }
                ]}
            />

            <CommonSnackbar
                text={"Текст скопирован!"}
                handleClose={handleClickSnackbar}
                open={openSnackbar}
                />
            </div>
    )
}

const putStateToProps = state => {
    state.auth.token = localStorage.getItem("userToken")
    return {
        user_id: state.auth.token,
        token_new_lesson: state.lessons.token_new_lesson,
    }
}


const putDispatchToProps = dispatch => {
    return {
        createTopic: bindActionCreators(createTopic, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(CreateTopic);
