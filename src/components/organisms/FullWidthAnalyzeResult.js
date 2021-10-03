import React, { useEffect } from 'react'
import {
  AppBar,
  CircularProgress,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { getDataAuthor } from '../../store/authors/actions'
import { connect } from 'react-redux'
import '../../styles/analyze.css'
import { Link } from 'react-router-dom'
import { getUserWords } from '../../store/books/actions'
import { OutlinedCard } from '../atoms/OutlinedCard'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FullWidthAnalyzeResult = ({
  open,
  handleClose,
  similarBooks,
  name,
  getDataAuthor,
  words,
  isLoadingWords,
  books,
}) => {
  const classes = useStyles()

  useEffect(() => {
    words = []
  }, [])

  // useEffect(() => {
  //   if (similarBooks !== '') {
  //     getDataAuthor(similarBooks)
  //   }
  // }, [similarBooks])

  const textWord = (cnt) => {
    cnt = Number(cnt)
    if (cnt >= 80000) {
      return <text>Очень часто используете</text>
    } else if (cnt >= 30000) {
      return <text>Довольно часто пишите</text>
    } else if (cnt >= 1000) {
      return <text>Частенько виден в тексте</text>
    } else {
      return <text>Нередко встречается</text>
    }
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Результат
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            Окей
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <div className={'center_block'}>
          <div className={'vertical_block_analyze'}>
            <div className={'title_analyze'}>
              Ваш стиль написания похож на книги
              {similarBooks !== undefined ? (
                <div className={'center_block'}>
                  {similarBooks.map(({ _id, name, authorName, section, year_published }, index) => (
                    <div style={styles.li} key={_id}>
                      <OutlinedCard
                        id={_id}
                        text={name}
                        type={section}
                        authorName={authorName}
                        year={year_published}
                        link_text={'book'}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
              <div className={'subtitle_analyze'}>Вам нравятся такие слова</div>
              <div className={'text_analyze'}>
                {isLoadingWords ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {words.map(({ name, cnt, rate }) => (
                      <div>
                        <i>{name}</i> — {textWord(rate)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </List>
    </Dialog>
  )
}

const putStateToProps = (state) => {
  return {
    similarBooks: state.books.similarBooks,
    name: state.authors.name,
    words: state.books.words,
    isLoadingWords: state.books.isLoadingWords,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getDataAuthor: bindActionCreators(getDataAuthor, dispatch),
  }
}

const styles = {
  block: {
    position: 'relative',
    color: '#000000',
    marginLeft: '20%',
    marginRight: '20%',
    backgroundColor: '#404040',
    borderRadius: 20,
  },

  li: {
    display: 'inline-block',
    listStyleType: 'none',
    padding: 10,
    textDecoration: 'none',
    textAlign: 'center',
  },
}

export default connect(putStateToProps, putDispatchToProps)(FullWidthAnalyzeResult)
