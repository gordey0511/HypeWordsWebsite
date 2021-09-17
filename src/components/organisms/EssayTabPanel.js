import React, {useEffect, useState} from "react";
import {Essay} from "../molecules/Essays/Essay";
import {EssayScore} from "../molecules/Essays/EssayScore";
import {bindActionCreators} from "redux";
import {getCheckListEssays, setScoreStudent, updateCheckStudent} from "../../store/lessons/actions";
import {connect} from "react-redux";

const EssayTabPanel = ({
                                  titleLesson,
                                  topicEssay,
                                  textEssay,
                                  commentEssay,
                                  setScoreStudent,
                                  user_id,
                                  id_essay,
                                  checkEssay,
                                  score,
                                  studentName,
                                  visible=true,
                                  updateCheckStudent,
                              }) => {

    const [text, setText] = useState(textEssay);
    const [valueSelect, setValueSelect] = useState(score);

    useEffect(() => {
        console.log("TEXT ESSAY "+id_essay+" "+score+" "+textEssay)
    },[])

    const handleChangeSelect = (event) => {
        setValueSelect(event.target.value)
    }

    const handleSetScore = () => {
        console.log("SET SCORE "+user_id+" "+text+" "+valueSelect+" "+id_essay)
        setScoreStudent(
            user_id,
            text,
            valueSelect,
            id_essay,
        )
    }

    useEffect(() => {
        if(id_essay!==undefined&&id_essay!==""){
            console.log("ESSAY TAB PANEL "+id_essay+" "+text+" "+valueSelect)
            updateCheckStudent(id_essay, text, valueSelect)
        }
    },[text,valueSelect])
    
    return (
        <div className={"center_block"} style={{width: '90%', display: "flex"}}>
            <Essay
                topicEssay={topicEssay}
                textEssay={text}
                disabled={(Boolean)((checkEssay!==undefined && checkEssay==="checked")||!visible)}
                handleStudentText={setText}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                    fontSize: 15,
                    marginTop: 7,
                }}
            >
                Ученик {studentName}
            </div>

            <EssayScore
                valueSelect={valueSelect}
                handleChangeSelect={handleChangeSelect}
                handleClick={handleSetScore}
                visible = {visible}
                disabled={(Boolean)(checkEssay!==undefined && checkEssay==="checked")}
                textButton={"Завершить проверку"}
                textSelect={"Оценка"}
            />
        </div>
    )
}

const putStateToProps = state => {
    return {
        user_id: state.auth.token,
    }
}

const putDispatchToProps = dispatch => {
    return {
        setScoreStudent: bindActionCreators(setScoreStudent, dispatch),
        updateCheckStudent: bindActionCreators(updateCheckStudent, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(EssayTabPanel);