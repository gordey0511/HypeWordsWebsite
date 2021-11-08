import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Essay } from '../../components/molecules/Essays/Essay'
import { bindActionCreators } from 'redux'
import {
  getCheckListEssays,
  getListLessonsUser,
  setScoreStudent,
} from '../../store/lessons/actions'
import { connect } from 'react-redux'
import EssayTabPanel from '../../components/molecules/EssayTabPanel'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'
import EssayTabs from '../../components/organisms/EssayTabs'

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

const CheckEssays = ({
  check_list_essays,
  getCheckListEssays,
  user_id,
  getListLessonsUser,
  list_lessons,
}) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('USER ID ' + user_id)
    if (user_id !== undefined && user_id !== '') {
      getListLessonsUser(user_id)
    }
  }, [user_id])

  useEffect(() => {
    console.log('list_lessons ' + list_lessons)
  }, [list_lessons])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <div className={'essay_vertical'}>
        <div className={'center_block_login'}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="secondary"
            textColor="inherit"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {list_lessons.map(({ title }, index) => (
              <Tab label={title} />
            ))}
          </Tabs>
        </div>
      </div>

      <div className={'essay_vertical'} style={{ marginTop: 20 }}>
        <div className={'center_block_login'}>
          {list_lessons !== undefined && list_lessons.length > value ? (
            <EssayTabs
              title={list_lessons[value].title}
              lesson_id={list_lessons[value]._id}
              start_time={list_lessons[value].start_time}
              end_time={list_lessons[value].end_time}
              comment={list_lessons[value].comment}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
    check_list_essays: state.lessons.check_list_essays,
    list_lessons: state.lessons.list_lessons,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getCheckListEssays: bindActionCreators(getCheckListEssays, dispatch),
    getListLessonsUser: bindActionCreators(getListLessonsUser, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(CheckEssays)
