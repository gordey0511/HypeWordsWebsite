import React, { useEffect } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Essay } from '../../components/molecules/Essays/Essay'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EssayTabPanel from '../../components/molecules/EssayTabPanel'
import { getUserEssays } from '../../store/auth/actions'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'

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

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

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

  tab_start_check: {
    backgroundColor: '#d5d20e',
  },

  body: {
    width: '80%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const UserEssays = ({ list_essays, user_id, getUserEssays }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const link = window.location.pathname
  const token = link.substr(13, link.length - 6)

  useEffect(() => {
    console.log('USER ID ' + user_id)
    if (user_id !== undefined && user_id !== '') {
      getUserEssays(user_id)
    }
  }, [user_id])

  useEffect(() => {
    list_essays.map(({ _id }, index) => {
      if (_id == token) {
        setValue(index)
        return
      }
    })
  }, [list_essays])

  useEffect(() => {
    console.log('check_list_essays ' + list_essays)
  }, [list_essays])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function getTab(text, check) {
    let classes_tab = {}
    if (check == 'checked') {
      classes_tab = classes.tab_checked
    } else if (check == 'in_progress') {
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

  return (
    <div>
      <MainTitle
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
        text={'Мои сочинения'}
      />
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
          {list_essays.map(({ topic, check }) => getTab(topic, check))}
        </Tabs>

        {list_essays.map(
          (
            {
              _id,
              topic,
              student_text,
              teacher_text,
              comment,
              student_id,
              check,
              score,
              student_name,
              teacher_name,
            },
            index
          ) => (
            <TabPanel value={value} index={index} className={classes.body}>
              <EssayTabPanel
                // titleLesson={"Урок"}
                topicEssay={topic}
                textStudent={student_text}
                textTeacher={teacher_text}
                id_essay={_id}
                checkEssay={check}
                score={score}
                studentName={student_name}
                teacherName={teacher_name}
                visible={false}
                accordion={{
                  title: 'Сочинение без правок',
                  text: student_text,
                  visible: teacher_text === undefined ? false : true,
                }}
              />
            </TabPanel>
          )
        )}
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
    list_essays: state.auth.essays,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getUserEssays: bindActionCreators(getUserEssays, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(UserEssays)
