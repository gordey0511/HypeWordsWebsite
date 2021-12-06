import React, { useEffect, useState } from 'react'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'
import { TextFieldMaterial } from '../../components/atoms/TextsInput/TextFieldMaterial'
import { MultilineTextInput } from '../../components/atoms/TextsInput/MultilineTextInput'
import { ButtonMaterial } from '../../components/atoms/Buttons/ButtonMaterial'
import { TITLES } from '../../utils/titles'
import { CheckBox } from '../../components/atoms/Checkboxs/Checkbox'
import { bindActionCreators } from 'redux'
import { createTopic } from '../../store/lessons/actions'
import { connect } from 'react-redux'
import { CommonDialog } from '../../components/molecules/Dialogs/CommonDialog'
import { links } from '../../utils/links'
import { useHistory } from 'react-router-dom'
import { CommonSnackbar } from '../../components/atoms/Snackbars/CommonSnackbar'
import { CommonDateRangePicker } from '../../components/atoms/DateRangePicker/CommonDateRangePicker'
import { CommonChip } from '../../components/atoms/Chips/CommonChip'
import NeedAuth, { checkUserAuth } from '../../components/molecules/Problems/NeedAuth'

function getTimeStamp(date) {
  return date.getTime() / 1000
}

export const copyToClipboard = (url) => {
  const textField = document.createElement('textarea')
  textField.innerText = url
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  document.body.removeChild(textField)
  textField.remove()
}

const CreateTopic = ({ user_id, token_new_lesson, createTopic, verified_email }) => {
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')
  const [score, setScore] = useState('')
  const [comment, setComment] = useState('')
  const [checked, setChecked] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [date, setDate] = useState([null, null])
  const [topicsArray, setTopicsArray] = useState([])
  const [scoreArray, setScoreArray] = useState(['Литература', 'Русский язык'])
  const [textSnackbar, setTextSnackbar] = useState('')
  const [severitySnackbar, setSeveritySnackbar] = useState('')
  const history = useHistory()

  useEffect(() => {
    token_new_lesson = ''
  }, [])

  useEffect(() => {
    console.log('NEW TOKEN LESSON ' + token_new_lesson)
    if (token_new_lesson !== undefined && token_new_lesson !== '') {
      setOpenDialog(true)
    }
  }, [token_new_lesson])

  const handleChecked = (event) => {
    setChecked(!checked)
    setTopicsArray([])
  }

  const handleTitle = (event) => {
    if (event.target.value.length < 75) {
      setTitle(event.target.value)
    }
  }

  const handleTopic = (event) => {
    if (event.target.value.length < 75) {
      setTopic(event.target.value)
    }
  }

  const handleScore = (event) => {
    if (event.target.value.length < 50) {
      setScore(event.target.value)
    }
  }

  const handleComment = (event) => {
    if (event.target.value.length < 3000) {
      setComment(event.target.value)
    }
  }

  const handleClose = () => {
    setOpenDialog(!openDialog)
    history.push('/profile')
  }

  const handleButton = () => {
    let type = 'common'
    let check_fields = true

    setTitle(title.trim().toString())
    setTopic(topic.trim().toString())
    // String start_time =
    console.log('TEACHER ID ' + user_id, topic, date[0], date[1])
    if (title === '') {
      check_fields = false
      setTextSnackbar('Вы не указали название урока')
    } else if (topicsArray.length === 0 && !checked) {
      check_fields = false
      setTextSnackbar('Вы не добавили ни одной темы сочинения')
    } else if (topic.length !== 0) {
      check_fields = false
      setTextSnackbar('Вы не добавили тему из поля ввода')
    } else if (scoreArray.length === 0) {
      check_fields = false
      setTextSnackbar('Вы не добавили ни одной оценки')
    } else if (score !== '') {
      check_fields = false
      setTextSnackbar('У вас в поле оценки остался текст')
    }

    if (check_fields) {
      if (topicsArray.length === 0) {
        type = 'free'
      } else if (topicsArray.length === 1) {
        type = 'common'
      } else {
        type = 'array'
      }

      let date_start = undefined,
        date_end = undefined

      if (!isNaN(Date.parse(date[0]))) {
        date_start = getTimeStamp(date[0])
      }

      if (!isNaN(Date.parse(date[1]))) {
        date_end = getTimeStamp(date[1]) + 86399
      }

      createTopic(title, type, topicsArray, user_id, date_start, date_end, comment, scoreArray)
    } else {
      setSeveritySnackbar('error')
      setOpenSnackbar(true)
    }
  }

  const handleClick = () => {
    navigator.clipboard.writeText(`${links.new_lesson}${token_new_lesson}`)
    setTextSnackbar('Ссылка скопирована!')
    setSeveritySnackbar('success')
    setOpenSnackbar(true)
  }

  const handleClickSnackbar = () => {
    setOpenSnackbar(false)
  }

  const handleAddChip = () => {
    if (topic !== '') {
      setTopicsArray(topicsArray.concat(topic))
      setTopic('')
    } else {
      alert('Тема пустая')
    }
  }

  const handleAddChipScore = () => {
    if (score !== '') {
      setScoreArray(scoreArray.concat(score))
      setScore('')
    } else {
      alert('Оценка пустая')
    }
  }

  function handleDeleteChip(index) {
    setTopicsArray(
      topicsArray.slice(0, index).concat(topicsArray.slice(index + 1, topicsArray.length))
    )
  }

  function handleDeleteChipScore(index) {
    setScoreArray(scoreArray.slice(0, index).concat(scoreArray.slice(index + 1, scoreArray.length)))
  }

  const handleKeyPress = (target) => {
    if (target.key === 'Enter') {
      handleAddChip()
    }
  }

  const handleKeyPresScore = (target) => {
    if (target.key === 'Enter') {
      handleAddChipScore()
    }
  }

  return (
    <div className={'center_block'} style={{ width: '66%', display: 'flex' }}>
      {checkUserAuth(user_id, verified_email) ? (
        <div className={'center_block'} style={{ width: '100%', display: 'flex' }}>
          <MainTitle text={TITLES.CREATE_TOPIC} />
          <TextFieldMaterial
            styles={{ marginBottom: 20, fontSize: 45 }}
            label={'Название урока'}
            value={title}
            changeValue={handleTitle}
          />

          <TextFieldMaterial
            styles={{
              display: checked ? 'none' : 'flex',
              marginBottom: 0,
              fontSize: 45,
            }}
            label={'Тема сочинения'}
            value={topic}
            onKeyDown={handleKeyPress}
            setLabel={setTopic}
            disabled={checked}
            changeValue={handleTopic}
            helperText={'Чтобы добавить тему сочинение нажмите enter'}
          />

          <div
            style={{
              marginTop: 25,
              display: 'inline-block',
              width: '100%',
              textAlign: 'left',
              flexDirection: 'row',
            }}
          >
            {topicsArray.map((name, index) => (
              <CommonChip
                text={name}
                index={index}
                style={{
                  // display: 'flex',
                  width: 'auto',
                  margin: 6,
                }}
                onDelete={handleDeleteChip}
              />
            ))}
          </div>

          <CheckBox
            styles={{
              display: 'flex',
              marginTop: 10,
              width: 200,
            }}
            label={'Свободная тема'}
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
              startText={'Начало урока'}
              endText={'Конец урока'}
            />
          </div>

          <TextFieldMaterial
            styles={{
              marginBottom: 0,
              fontSize: 45,
            }}
            label={'Название оценки'}
            value={score}
            onKeyDown={handleKeyPresScore}
            setLabel={setScore}
            changeValue={handleScore}
            helperText={'Чтобы добавить оценку за урок нажмите enter'}
          />

          <div
            style={{
              marginTop: 25,
              display: 'inline-block',
              width: '100%',
              textAlign: 'left',
              flexDirection: 'row',
            }}
          >
            {scoreArray.map((name, index) => (
              <CommonChip
                text={name}
                index={index}
                style={{
                  // display: 'flex',
                  width: 'auto',
                  margin: 6,
                }}
                onDelete={handleDeleteChipScore}
              />
            ))}
          </div>

          <MultilineTextInput
            styles={{
              marginTop: 0,
              marginBottom: 15,
            }}
            label={'Комментарий'}
            value={comment}
            rows={3}
            helperText={'Будет виден ученикам'}
            changeValue={handleComment}
          />

          <ButtonMaterial
            text={'Создать'}
            styles={{
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
            }}
            color={'primary'}
            handleClick={handleButton}
          />
        </div>
      ) : (
        <NeedAuth />
      )}

      <CommonDialog
        open={openDialog}
        title={'Урок опубликован!'}
        text={`Ссылка на урок </br><b><Link onclick={handleClick}>${links.new_lesson}${token_new_lesson}</Link></b></br> <br/> Отправьте ее своим ученикам`}
        handleClose={handleClose}
        buttons={[
          {
            text: 'Закрыть',
            handleClick: handleClose,
          },
          {
            text: 'Скопировать',
            handleClick: handleClick,
          },
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

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
    verified_email: state.auth.verified_email,
    token_new_lesson: state.lessons.token_new_lesson,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    createTopic: bindActionCreators(createTopic, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(CreateTopic)
