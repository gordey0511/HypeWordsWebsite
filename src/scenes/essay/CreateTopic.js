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
import {NeedRegistration} from "../../components/molecules/Problems/NeedRegistration";
import {DialogNewLesson} from "../../components/molecules/Dialogs/DialogNewLesson";
import {CommonDialog} from "../../components/molecules/Dialogs/CommonDialog";
import {links} from "../../utils/links";
import {useHistory} from "react-router-dom";
import {CommonSnackbar} from "../../components/atoms/Snackbars/CommonSnackbar";
import {CommonDateRangePicker} from "../../components/atoms/DateRangePicker/CommonDateRangePicker";
import {TextFieldChips} from "../../components/atoms/TextsInput/TextFieldChips";
import {CommonChip} from "../../components/atoms/Chips/CommonChip";
import {Chip} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function getTimeStamp(date){
    return date.getTime()/1000
}

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
    const [date, setDate] = useState([null, null]);
    const [topicsArray, setTopicsArray] = useState([]);
    const [textSnackbar, setTextSnackbar] = useState("");
    const [severitySnackbar, setSeveritySnackbar] = useState("");
    const history = useHistory();

    useEffect(() => {
        token_new_lesson = ""
    },[])

    useEffect(() => {
        console.log("NEW TOKEN LESSON " + token_new_lesson)
        if(token_new_lesson !== undefined && token_new_lesson !== ""){
            setOpenDialog(true)
        }
    },[token_new_lesson])

    const handleChecked = (event) => {
        setChecked(!checked)
        setTopicsArray([])
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
        let check_fields = true;

        setTitle(title.trim().toString())
        setTopic(topic.trim().toString())
        // String start_time =
        console.log("TEACHER ID " + user_id, topic, date[0],date[1])
        if(title === ""){
            check_fields = false;
            setTextSnackbar("Вы не указали название урока")
        }else if(topicsArray.length===0  && !Boolean(checked)){
            check_fields = false;
            setTextSnackbar("Вы не добавили ни одной темы сочинения")
        }else if(topic.length !== 0){
            check_fields = false;
            setTextSnackbar("Вы не добавили тему из поля ввода")
        }

        if(check_fields){

            if(topicsArray.length === 0){
                type = "free"
            }else if(topicsArray.length === 1){
                type = "common"
            }else{
                type = "array"
            }

            let date_start=undefined, date_end=undefined;

            if(!isNaN(Date.parse(date[0]))){
                date_start = getTimeStamp(date[0]);
            }

            if(!isNaN(Date.parse(date[1]))){
                date_end = getTimeStamp(date[1]);
            }

            createTopic(
                title,
                type,
                topicsArray,
                user_id,
                date_start,
                date_end,
                comment,
            )
        }else{
            setSeveritySnackbar("error");
            setOpenSnackbar(true);
        }
    }

    const handleClick = () => {
        navigator.clipboard.writeText(`${links.new_lesson}${token_new_lesson}`)
        setTextSnackbar("Ссылка скопирована!")
        setSeveritySnackbar("success");
        setOpenSnackbar(true);
    }

    const handleClickSnackbar = () => {
        setOpenSnackbar(false)
    }

    const handleAddChip = () => {
        if(topic!==''){
            setTopicsArray(topicsArray.concat(topic))
            setTopic("")
        }else{
            alert("Тема пустая")
        }
    }

    function handleDeleteChip(index){
        setTopicsArray(topicsArray.slice(0,index).concat(topicsArray.slice(index+1,topicsArray.length)))
    }

    const handleKeyPress = (target) => {
        if (target.key === 'Enter') {
            handleAddChip()
        }
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
                        styles={{
                            display: Boolean(checked)?'none':'flex',
                            marginBottom: 15,
                            fontSize: 45
                        }}
                        label={"Тема сочинения"}
                        value={topic}
                        onKeyDown={handleKeyPress}
                        setLabel={setTopic}
                        disabled={checked}
                        changeValue={handleTopic}
                        helperText={"Чтобы добавить тему сочинение нажмите enter"}
                    />

                    <div
                        style={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'row',
                        }
                        }
                    >
                        {
                            topicsArray.map((name,index) => (
                                <CommonChip
                                    text={name}
                                    index = {index}
                                    style = {{
                                        width: 'auto',
                                        margin: 6,
                                    }}
                                    onDelete={handleDeleteChip}
                                />
                            ))
                        }
                    </div>

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

                    <div
                        style={{
                            display: 'flex',
                            textAlign: 'left',
                            justifyContent: 'left',
                            marginTop: 15,
                        }}
                    >
                        <CommonDateRangePicker
                            date={date}
                            setDate={setDate}
                            startText={"Начало урока"}
                            endText={"Конец урока"}
                        />
                    </div>

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
                text={textSnackbar}
                handleClose={handleClickSnackbar}
                open={openSnackbar}
                severity={severitySnackbar}
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
