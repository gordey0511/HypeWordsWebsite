import React, { useEffect, useRef, useState } from 'react'
import { Essay } from './Essays/Essay'
import { EssayScore } from './Essays/EssayScore'
import { bindActionCreators } from 'redux'
import {
  getCheckListEssays,
  setScoreStudent,
  updateCheckStudent,
} from '../../store/lessons/actions'
import { connect } from 'react-redux'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ArrowDropDown'
import { CommonAccordion } from './Accordion/CommonAccordion'
import { CommonSnackbar } from '../atoms/Snackbars/CommonSnackbar'

const EssayTabPanel = ({
  titleLesson,
  topicEssay,
  textStudent,
  textTeacher,
  commentEssay,
  setScoreStudent,
  user_id,
  id_essay,
  checkEssay,
  score,
  studentName,
  teacherName,
  accordion,
  typeTabPanel,
  visible = true,
}) => {
  const [text, setText] = useState(textTeacher !== undefined ? textTeacher : textStudent)
  const [valueSelect, setValueSelect] = useState(score)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    setValueSelect(score)
  }, [score])

  const timeout = useRef(null)

  const handleChangeSelect = (event) => {
    setValueSelect(event.target.value)
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      saveValueToDB(text, event.target.value)
    }, 500)
  }

  const saveValueToDB = (text, value) => {
    console.log('save', text, value)
    setScoreStudent(user_id, text, value, id_essay, 'in_progress')
  }
  const handleChangeText = (text) => {
    setText(text)
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      saveValueToDB(text, valueSelect)
    }, 500)
  }

  useEffect(() => {
    return () => {
      //тут тоже в дб можно записать
      clearTimeout(timeout.current)
    }
  }, [])

  const handleSetScore = () => {
    if (valueSelect === undefined || valueSelect === '') {
      setOpenSnackbar(true)
      return
    }
    if (checkEssay === undefined || checkEssay === 'in_progress') {
      setScoreStudent(user_id, text, valueSelect, id_essay, 'checked')
    } else {
      checkEssay = 'in_progress'
      setScoreStudent(user_id, text, valueSelect, id_essay, 'in_progress')
    }
  }

  // useEffect(() => {
  //     if(id_essay!==undefined&&id_essay!==""){
  //         updateCheckStudent(id_essay, text, valueSelect)
  //     }
  // },[text,valueSelect])

  let middlePlace = <div></div>

  if (!visible) {
    if (score !== undefined && textTeacher !== undefined) {
      // setText(textTeacher)
      middlePlace = (
        <div
          style={{
            fontSize: 25,
            color: 'blue',
            fontWeight: 500,
            textAlign: 'left',
            justifyContent: 'left',
          }}
        >
          {`Оценка ${score}`}
        </div>
      )
    } else {
      middlePlace = <div>Ждем проверки учителем</div>
    }
  }

  // if(visible===false && score!==undefined){
  //     setText()
  // }

  return (
    <div className={'center_block'} style={{ width: '90%', display: 'flex' }}>
      <Essay
        topicEssay={topicEssay}
        textEssay={text}
        disabled={Boolean((checkEssay !== undefined && checkEssay === 'checked') || !visible)}
        handleStudentText={handleChangeText}
        accordion={accordion}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          fontSize: 15,
          marginTop: 7,
        }}
      >
        {typeTabPanel === 'check' ? (
          <div>Ученик {studentName}</div>
        ) : (
          <div>Учитель {teacherName}</div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          textAlign: 'flex',
          color: 'blue',
          marginTop: 10,
        }}
      >
        {middlePlace}
      </div>

      <EssayScore
        valueSelect={valueSelect}
        handleChangeSelect={handleChangeSelect}
        handleClick={handleSetScore}
        visible={visible}
        disabled={Boolean(checkEssay !== undefined && checkEssay === 'checked')}
        textButton={'Завершить проверку'}
        textSelect={'Оценка'}
      />

      <CommonSnackbar
        text={'Вы не поставили оценку'}
        handleClose={() => {
          setOpenSnackbar(false)
        }}
        open={openSnackbar}
        severity={'error'}
      />
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    setScoreStudent: bindActionCreators(setScoreStudent, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(EssayTabPanel)
