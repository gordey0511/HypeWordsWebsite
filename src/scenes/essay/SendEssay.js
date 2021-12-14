import React, { useEffect, useState } from 'react'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'
import { TextFieldMaterial } from '../../components/atoms/TextsInput/TextFieldMaterial'
import { MultilineTextInput } from '../../components/atoms/TextsInput/MultilineTextInput'
import { ButtonMaterial } from '../../components/atoms/Buttons/ButtonMaterial'
import { bindActionCreators } from 'redux'
import { getLesson, getTeacher, sendEssay } from '../../store/lessons/actions'
import SimpleDateTime from 'react-simple-timestamp-to-date'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CommonDialog } from '../../components/molecules/Dialogs/CommonDialog'
import { TextCKEditor } from '../../components/atoms/TextsInput/TextCKEditor'
import { NeedRegistration } from '../../components/molecules/Problems/NeedRegistration'
import { LessonNotStarted } from '../../components/molecules/Problems/LessonNotStarted'
import { LessonFinished } from '../../components/molecules/Problems/LessonFinished'
import { CommonSelect } from '../../components/atoms/Selects/CommonSelect'
import { CommonSelect2 } from '../../components/atoms/Selects/CommonSelect2'
import { EssayCheckingCKEditor } from '../../components/atoms/TextsInput/EssayCheckingCKEditor'
import { Typography } from '@mui/material'
import NeedAuth, { checkUserAuth } from '../../components/molecules/Problems/NeedAuth'
import { getUser } from '../../store/auth/actions'
import { Loading } from '../../components/molecules/Problems/Loading'

export const getStringDate = (currentTimestamp) => {
  currentTimestamp *= 1000
  let dateStr = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
  }).format(currentTimestamp) // 01/11/2021
  console.log('UPDATE PARAM 2 ' + dateStr)
  return dateStr
}

export const getStringTime = (currentTimestamp) => {
  currentTimestamp *= 1000
  let dateStr = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(currentTimestamp) // 01/11/2021
  console.log('UPDATE PARAM 2 ' + dateStr)
  return dateStr
}

const SendEssay = ({
  Title,
  teacherName,
  teacher_id,
  student_id,
  type,
  topic,
  studentVerified,
  start_time,
  end_time,
  commentTeacher,
  getLesson,
  getTeacher,
  sendEssay,
  score_names,
  getData,
  isLoading,
}) => {
  const [topicUser, setTopicUser] = useState('')
  const [text, setText] = useState('')
  const [comment, setComment] = useState('')
  const [openSubmitted, setOpenSubmitted] = useState(false)

  const link = window.location.pathname
  const token = link.substr(12, link.length - 12)
  const history = useHistory()
  let dateNow = new Date()

  useEffect(() => {
    console.log('TOKEN ' + token)
    getData(student_id)
    getLesson(token)
  }, [token])

  // useEffect(() => {
  //   setTopicUser(topicUser)
  // }, [topicUser])

  useEffect(() => {
    // if (teacher_id !== undefined && teacher_id !== '') {
    //   getTeacher(teacher_id)
    // }
  }, [teacher_id])

  const handleTopicUser = (event) => {
    setTopicUser(event.target.value)
  }

  const handleComment = (event) => {
    setComment(event.target.value)
  }

  const handleCloseDialogs = () => {
    setOpenSubmitted(false)
    history.push('/')
  }

  const handleButton = () => {
    if (topicUser !== '') {
      if (text !== '') {
        sendEssay(student_id, topicUser, text, comment, token, teacher_id, score_names)
        setOpenSubmitted(true)
      } else {
        alert('Напишите текст сочинение')
      }
    } else {
      alert('Выберите тему сочинения')
    }
  }

  const [errorComponent, setErrorComponent] = useState(null)
  useEffect(() => {
    let timestampNow = Number(Number(dateNow.getTime()) / 1000)
    console.log('UPDATE PARAM ', student_id, start_time, timestampNow, end_time)
    if (start_time !== undefined && timestampNow < start_time) {
      setErrorComponent(<LessonNotStarted date={getStringDate(start_time)} name={Title} />)
    } else if (end_time !== undefined && end_time !== 0 && timestampNow > end_time) {
      setErrorComponent(<LessonFinished date={getStringDate(end_time)} name={Title} />)
    } else {
      setErrorComponent(null)
    }
  }, [student_id, studentVerified, start_time, end_time])

  const [choiceTopics, setChoiceTopics] = useState(null)
  useEffect(() => {
    if (topic.type !== undefined) {
      console.log('ARRAY ' + topic.topics)
      if (topic.type === 'free') {
        setChoiceTopics(
          <TextFieldMaterial
            styles={{
              marginTop: 10,
              marginBottom: 0,
              fontSize: 45,
            }}
            label={'Тема сочинения'}
            disabled={false}
            value={topicUser}
            changeValue={handleTopicUser}
          />
        )
      } else if (topic.type === 'common') {
        setTopicUser(topic.topics)
        setChoiceTopics(
          <TextFieldMaterial
            styles={{
              marginTop: 10,
              marginBottom: 0,
              fontSize: 45,
            }}
            label={'Тема сочинения'}
            // label={topic.topics}
            disabled={true}
            value={topic.topics}
            changeValue={handleTopicUser}
          />
        )
      } else {
        setChoiceTopics(
          <CommonSelect2
            styles={{
              marginTop: 10,
              marginBottom: 0,
              fontSize: 45,
            }}
            label={'Тема сочинения'}
            array={topic.topics}
            value={topicUser}
            handleChange={handleTopicUser}
          />
        )
      }
    }
  }, [topic, topicUser])

  return (
    <div className={'center_block'} style={{ width: '40%', display: 'flex' }}>
      {!isLoading ? (
        <div>
          {checkUserAuth(student_id, studentVerified) ? (
            errorComponent === null ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <MainTitle text={Title} />
                <p style={{ textAlign: 'left', margin: 0 }}>
                  <b>Преподаватель</b> {teacherName}
                </p>

                {commentTeacher !== undefined && commentTeacher !== '' ? (
                  <Typography variant={'body1'} style={{ textAlign: 'left' }}>
                    <b>Комментарий </b>
                    {commentTeacher}
                  </Typography>
                ) : null}

                {choiceTopics}
                <TextCKEditor
                  label={'Текст сочинения'}
                  value={text}
                  rows={68}
                  changeValue={setText}
                  placeholder={'Напишите сочинение...'}
                  style={{
                    marginBottom: 20,
                    marginTop: 30,
                  }}
                />

                <ButtonMaterial
                  text={'Отправить сочинение на проверку'}
                  styles={{
                    marginTop: 20,
                    marginBottom: 50,
                    width: '100%',
                  }}
                  color={'primary'}
                  handleClick={handleButton}
                />

                <CommonDialog
                  open={openSubmitted}
                  title={'Вы успешно отправили сочинение!'}
                  text={
                    'В ближайшее время ваше сочинение проверит преподаватель. Следите за почтой'
                  }
                  handleClose={handleCloseDialogs}
                  buttons={[
                    {
                      text: 'Закрыть',
                      handleClick: handleCloseDialogs,
                    },
                  ]}
                />
              </div>
            ) : (
              errorComponent
            )
          ) : (
            <NeedAuth />
          )}
        </div>
      ) : (
        <Loading style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }} />
      )}
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    student_id: state.auth.token,
    studentVerified: state.auth.verified_email,
    teacher_id: state.lessons.teacher_id,
    topic: state.lessons.topic,
    start_time: state.lessons.start_time,
    end_time: state.lessons.end_time,
    teacherName: state.lessons.teacher_name,
    Title: state.lessons.title,
    commentTeacher: state.lessons.comment,
    score_names: state.lessons.score_names,
    isLoading: state.lessons.isLoading,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getLesson: bindActionCreators(getLesson, dispatch),
    getTeacher: bindActionCreators(getTeacher, dispatch),
    sendEssay: bindActionCreators(sendEssay, dispatch),
    getData: bindActionCreators(getUser, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(SendEssay)
