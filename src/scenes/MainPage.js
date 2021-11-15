import React, { useEffect, useState } from 'react'
import { ListOfAuthor } from './author/ListOfAuthors'
import { AddAuthor } from '../components/organisms/AddAuthor'
import { Link, Switch } from 'react-router-dom'
import { bindActionCreators, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { update_navbar } from '../store/navbar/actions'
import { NAVBAR_TITLE } from '../utils/constants'
import '../styles/text.css'
import '../styles/main.css'
import { Fab } from '../components/atoms/Fab'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { LinkButton } from '../components/atoms/Buttons/LinkButton'

const useStyles = makeStyles({
  button: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    textDecoration: 'none',
  },

  link: {
    textDecoration: 'none',
  },

  left: {
    float: 'left',
    textAlign: 'left',
    fontSize: 25,
    // fontWeight: 520,
  },
})

const MainPage = ({ updateNavbar }) => {
  const classes = useStyles()

  useEffect(() => {
    updateNavbar(NAVBAR_TITLE.Home)
  })

  return (
    <div className="main_page_div">
      <header className={'main_page_text'}>
        <a style={styles.block_top}>
          <div>
            Рады вас видеть на сайте <text className={'main_page_text_color'}></text>
            {/*<br />*/}
            <text className={'main_page_text_color'}>{'HypeWords'}</text>
            <br />
            Выберите один из разделов слева
            {/*<text className={'main_page_text_color'}>HypeWords</text> — сайт про любимые <br />*/}
            {/*слова авторов из разных книг.*/}
          </div>
        </a>
        <div className={'main_div_buttons'}>
          {/*<LinkButton link={'/posts'} text={'Посты'} />*/}
          {/*<LinkButton link={'/analyze'} text={'Книги'} />*/}
          {/*<LinkButton link={'/authors'} text={'Авторы'} />*/}
          {/*<LinkButton link={'/analyze'} text={'Анализировать'} color={'secondary'} />*/}
        </div>
      </header>
      <div>
        <img className={'main_page_img'} src={'logo512.png'} alt={'.'} />
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    updateNavbar: bindActionCreators(update_navbar, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(MainPage)

const styles = {
  about_me: {
    position: 'relative',
    display: 'absolute',
    // display:'table-cell!important',
    // display: 'table-cell',
    // display: 'flex',
    fontSize: 20,
    // marginTop: 100,
    textAlign: 'flex-end',
    verticalAlign: 'bottom',
    bottom: 0,
    marginBottom: 0,
    alignItems: 'flex-end',
  },

  button_analyze: {
    position: 'absolute',
    display: 'absolute',
    borderRadius: 20,
    justifyContent: 'flex-end',
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 600,
    // marginRight:0,
    // paddingRight: 0,
    // textAlign: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    right: 10,
    bottom: 10,
  },

  main: {
    display: 'block',
    position: 'relative',
  },

  img_back: {
    width: '100%',
    height: 'auto',
  },

  block_top: {
    // position:'absolute',
    // position:'relative',
    // display:'inline-block',
    // top: 40,
    color: '#000000',
    // verticalAlign: 'bottom',
  },
}
