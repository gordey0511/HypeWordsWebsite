import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Essay } from '../../components/molecules/Essays/Essay'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EssayTabPanel from '../../components/molecules/EssayTabPanel'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'
import { EmptyPage } from '../molecules/Problems/EmptyPage'
import { Loading } from '../molecules/Problems/Loading'
import { CommonAccordion } from '../molecules/Accordion/CommonAccordion'
import { WEBSITE_URL } from '../../utils/constants'
import { Button, Link } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { links } from '../../utils/links'
import { CommonSnackbar } from '../atoms/Snackbars/CommonSnackbar'
import { getStringDate } from '../../scenes/essay/SendEssay'
import { copyToClipboard } from '../../scenes/essay/CreateTopic'
import { getCheckListEssays } from '../../store/lessons/actions'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      // style={{
      //     width: '90%',
      // }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  tabs: {
    width: '20%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  tab_checked: {
    backgroundColor: '#46d713',
  },

  tab_int_progress: {
    backgroundColor: '#fdf901',
  },

  body: {
    width: '80%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const EssayTabs = ({
  check_list_essays,
  getCheckListEssays,
  lesson_id,
  isLoading,
  start_time,
  end_time,
  comment,
  topic,
  title,
  publication_time,
  score_names,
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [snackbar, setSnackbar] = useState(false)

  useEffect(() => {
    console.log('PUB TIME TAB ' + publication_time)
    if (lesson_id !== undefined && lesson_id !== '') {
      getCheckListEssays(lesson_id)
    }
  }, [lesson_id])

  useEffect(() => {
    console.log('check_list_essays ' + check_list_essays)
  }, [check_list_essays])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = () => {
    copyToClipboard(`${WEBSITE_URL}/send_essay/${lesson_id}`)
  }
  // const handleClick = () => {
  //   navigator.clipboard
  //     .writeText(`${WEBSITE_URL}/send_essay/${lesson_id}`)
  //     .then((r) => setSnackbar(true))
  // }

  const handleCloseSnackbar = () => {
    setSnackbar(false)
  }

  function getTab(text, check) {
    let classes_tab = {}
    if (check === 'checked') {
      classes_tab = classes.tab_checked
    } else if (check === 'in_progress') {
      classes_tab = classes.tab_int_progress
    }

    return (
      <Tab
        label={text}
        className={classes_tab}
        style={{
          fontWeight: 600,
          fontSize: 16,
        }}
      />
    )
  }

  const [listTopics, setListTopics] = useState([])

  useEffect(() => {
    if (topic !== undefined && topic !== null) {
      if (topic.type === 'free') {
        setListTopics(['?????????????????? ????????'])
      } else if (topic.type === 'common') {
        setListTopics([topic.topics])
      } else if (topic.type === 'array') {
        setListTopics([
          topic.topics.map((name, index) => {
            if (index === topic.topics.length - 1) {
              return name
            } else {
              return `${name}, `
            }
          }),
        ])
      }
    }
  }, [topic])

  const [listScore, setListScore] = useState([])

  useEffect(() => {
    if (score_names !== undefined && score_names !== null) {
      setListScore([
        score_names.map((name, index) => {
          if (index === score_names.length - 1) {
            return name
          } else {
            return `${name}, `
          }
        }),
      ])
    }
  }, [score_names])

  return (
    <div>
      <CommonAccordion
        title={'???????????????????? ???? ??????????'}
        style={{
          marginBottom: 10,
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <Button onClick={handleClick} style={{ marginBottom: 15 }}>
            <ContentCopyIcon style={{ marginRight: 10 }} />
            ???????????? ???? ????????
          </Button>
          <div style={{ marginBottom: 10 }}>
            <b>????????????: </b>
            {`${WEBSITE_URL}/send_essay/${lesson_id}`}
          </div>
          <div>
            <b>????????????????:</b> {title}
          </div>
          <div>
            <b>???????? ??????????????????:</b> {listTopics.map((name, index) => name)}
          </div>
          {start_time !== undefined && start_time !== 0 ? (
            <div>
              <b>?????????? ????????????:</b> {getStringDate(start_time)}
            </div>
          ) : null}
          {end_time !== undefined && end_time !== 0 ? (
            <div>
              <b>?????????? ??????????????????:</b> {getStringDate(end_time)}
            </div>
          ) : null}
          <div>
            <b>???????????????? ????????????: </b>
            {listScore.map((name, index) => name)}
          </div>
          {comment !== undefined ? (
            <div>
              <b>??????????????????????:</b> {comment}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </CommonAccordion>

      {check_list_essays !== undefined && check_list_essays.length > 0 ? (
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            color={'primary'}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {check_list_essays.map(({ student_name, check }) => getTab(student_name, check))}
          </Tabs>

          {check_list_essays.map(
            (
              {
                _id,
                topic,
                student_text,
                comment,
                student_id,
                check,
                score,
                student_name,
                teacher_text,
                teacher_name,
                publication_time,
              },
              index
            ) => (
              <TabPanel value={value} key={index} index={index} className={classes.body}>
                <EssayTabPanel
                  // titleLesson={"????????"}
                  topicEssay={topic}
                  textStudent={teacher_text !== undefined ? teacher_text : student_text}
                  id_essay={_id}
                  checkEssay={check}
                  scoreInitial={score}
                  score_names={score_names}
                  publication_time={publication_time}
                  studentName={student_name}
                  teacherName={teacher_name}
                  accordion={{
                    title: '?????????? ?????????????? (?????? ????????????)',
                    text: student_text,
                    visible: true,
                  }}
                  typeTabPanel={'check'}
                  // commentEssay={
                  //     comment !== undefined ? comment : ""
                  // }
                />
              </TabPanel>
            )
          )}
        </div>
      ) : isLoading === true ? (
        <Loading />
      ) : (
        <EmptyPage />
      )}

      <CommonSnackbar
        text={'???????????? ??????????????????????'}
        handleClose={handleCloseSnackbar}
        open={snackbar}
      />
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    check_list_essays: state.lessons.check_list_essays,
    isLoading: state.lessons.isLoading,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getCheckListEssays: bindActionCreators(getCheckListEssays, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(EssayTabs)
