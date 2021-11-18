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
import { getStringTime } from '../../scenes/essay/SendEssay'

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
  scoreInitial,
  studentName,
  teacherName,
  accordion,
  typeTabPanel,
  score_names,
  visible = true,
  publication_time,
}) => {
  const [text, setText] = useState(textTeacher !== undefined ? textTeacher : textStudent)
  const [valueSelect, setValueSelect] = useState([])
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    console.log('PUBLICATION TIME ' + publication_time)
  }, [])

  useEffect(() => {
    // console.log('SCORE INITIAL ' + scoreInitial.length + ' ' + score_names)
    if (scoreInitial !== undefined && scoreInitial !== null) {
      setValueSelect(scoreInitial.map(({ name, score }, index) => ({ name: name, score: score })))
      console.log('SCORE INITIAL NEW ' + ' ' + score_names)
    }
    // else {
    //   setValueSelect(score_names.map((name, index) => ({ name: name, score: null })))
    // }
    // else {
    // setValueSelect(score_names.map((name, index) => ({ name: name, score: null })))
    // }
  }, [scoreInitial])

  // useEffect(() => {
  //   console.log('VALUESELECT ' + valueSelect[0] + ' ' + score_names.length)
  // }, [valueSelect])

  const timeout = useRef(null)

  const handleChangeSelect = (index) => (event) => {
    console.log('SET MARK ' + index + ' ' + event.target.value)
    let newValueSelect = Object.assign([], valueSelect)
    newValueSelect[index].score = event.target.value

    setValueSelect(newValueSelect)
    // console.log('NEW MARKS ' + valueSelect[0].score)
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      saveValueToDB(text, valueSelect)
    }, 200)
  }

  const saveValueToDB = (text, value, type = 'in_progress') => {
    console.log('save', text, value)

    setScoreStudent(user_id, text, value, id_essay, type)
  }
  const handleChangeText = (text) => {
    setText(text)

    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      saveValueToDB(text, valueSelect)
    }, 200)
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
      checkEssay = 'checked'
      let checkScore = true
      valueSelect.map(({ name, score }) => {
        if (score === undefined || score === null) {
          checkScore = false
        }
      })

      if (checkScore) {
        setScoreStudent(user_id, text, valueSelect, id_essay, 'checked')
      } else {
        alert('Вы не поставили все оценки')
      }

      // setScoreStudent(user_id, text, valueSelect, id_essay, 'checked')
    } else {
      checkEssay = 'in_progress'
      saveValueToDB(text, valueSelect, 'in_progress')
      // setScoreStudent(user_id, text, valueSelect, id_essay, 'in_progress')
    }
  }

  // useEffect(() => {
  //     if(id_essay!==undefined&&id_essay!==""){
  //         updateCheckStudent(id_essay, text, valueSelect)
  //     }
  // },[text,valueSelect])

  let middlePlace = <div></div>

  const getScore = (score) => {
    let res = <b></b>
    if (score === 'Пять') {
      res = <b style={{ color: '#42ea05' }}>{score}</b>
    } else if (score === 'Четыре') {
      res = <b style={{ color: '#c1e205' }}>{score}</b>
    } else if (score === 'Три') {
      res = <b style={{ color: '#ec9f06' }}>{score}</b>
    } else if (score === 'Два') {
      res = <b style={{ color: '#d44706' }}>{score}</b>
    } else {
      res = <b style={{ color: '#e50c0c' }}>{score}</b>
    }
    return res
  }

  if (!visible) {
    if (scoreInitial !== undefined && textTeacher !== undefined) {
      // setText(textTeacher)
      middlePlace = (
        <div
          style={{
            fontSize: 25,
            // marginTop: 10,
            textAlign: 'left',
            justifyContent: 'left',
          }}
        >
          {scoreInitial.map(({ name, score }, index) => (
            <div>
              {name}: {getScore(score)}
            </div>
          ))}
        </div>
      )
    } else {
      middlePlace = <div>Ждем проверки учителем...</div>
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
          flexDirection: 'column',
          justifyContent: 'left',
          fontSize: 15,
          marginTop: 7,
        }}
      >
        <div style={{ display: 'block', textAlign: 'left' }}>
          {typeTabPanel === 'check' ? (
            <div style={{ textAlign: 'left' }}>Ученик: {studentName}</div>
          ) : (
            <div>Учитель: {teacherName}</div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'left' }}>
          {publication_time !== undefined && publication_time !== null && publication_time !== 0 ? (
            <div>Время отправки: {getStringTime(publication_time)}</div>
          ) : null}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          textAlign: 'flex',
          color: 'black',
          fontSize: 25,
          marginTop: 0,
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
