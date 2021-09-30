import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { styleCard } from '../../styles/style'
import { bindActionCreators } from 'redux'
import { getUserEssay } from '../../store/essays/actions'
import { connect } from 'react-redux'
import { Essay } from '../../components/molecules/Essays/Essay'
import { setScoreStudent } from '../../store/lessons/actions'

const EssayPage = ({
  topic,
  student_text,
  student_id,
  score,
  teacher_id,
  teacher_text,
  comment,
  check,
  getUserEssay,
  setScoreStudent,
  token_teacher,
}) => {
  const link = window.location.pathname
  const token = link.substr(7, link.length - 6)

  useEffect(() => {
    if (token !== undefined && token !== '') {
      console.log('TOKEN ESSAY ' + token)
      getUserEssay(token)
    }
  }, [token])

  useEffect(() => {
    console.log('STUDENT TEXT ' + student_text)
    if (student_text !== '') {
      setStudentText(student_text)
    }
  }, [student_text])

  const [studentText, setStudentText] = useState('')

  const handleText = (event) => {
    setStudentText(event.target.value)
  }

  return (
    <div className={'center_block'} style={{ width: '66%', display: 'flex' }}>
      <Essay
        topicEssay={topic}
        disabled={true}
        studentText={studentText}
        handleStudentText={handleText}
      />
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    topic: state.essays.topic,
    student_text: state.essays.student_text,
    student_id: state.essays.student_id,
    score: state.essays.score,
    teacher_id: state.essays.teacher_id,
    teacher_text: state.essays.teacher_text,
    comment: state.essays.comment,
    check: state.essays.check,
    token_teacher: state.auth.token,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getUserEssay: bindActionCreators(getUserEssay, dispatch),
    setScoreStudent: bindActionCreators(setScoreStudent, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(EssayPage)
