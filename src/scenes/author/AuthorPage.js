import React, { useEffect } from 'react'
import { LinesOfAuthorsBooks } from '../../components/molecules/LinesOfAuthorsBooks'
import { bindActionCreators } from 'redux'
import { getDataAuthor } from '../../store/authors/actions'
import { connect } from 'react-redux'
import '../scenes.css'
import { update_navbar } from '../../store/navbar/actions'
import { NAVBAR_TITLE } from '../../utils/constants'
import { Link } from 'react-router-dom'
import '../../styles/blocks.css'
import { Typography } from '@material-ui/core'
import { LinesBooks } from '../../components/molecules/LinesBooks'
import { Loading } from '../../components/molecules/Problems/Loading'

export const AuthorPage = ({
  name,
  about,
  books,
  section,
  date_of_live,
  place_of_live,
  statistic,
  getDataAuthor,
  updateNavbar,
}) => {
  const link = window.location.pathname
  const token = link.substr(8, link.length - 6)

  useEffect(() => {
    console.log('AUTHOR PAGE ' + token)
    getDataAuthor(token)
    updateNavbar(NAVBAR_TITLE.Authors)
  }, [])

  useEffect(() => {
    console.log('AUTHOR PAGE BOOKS ' + books)
  }, [books])

  const getDescribeWord = (index) => {
    if (index <= 3) {
      return 'очень часто'
    } else if (index <= 6) {
      return 'популярно'
    } else {
      return 'нередко'
    }
  }

  return (
    <div className="center_div">
      {name !== undefined && name !== '' ? (
        <div className={'block_author'}>
          <div className={'block_author_2'}>
            <Typography variant={'h3'} className={'author_title'}>
              {name}
            </Typography>

            <div className={'author_about'}>{about}</div>
          </div>
          <br />
          <div className={'author_title_books'}>Информация</div>
          {date_of_live !== '' && date_of_live !== null && date_of_live !== undefined ? (
            <div>
              <div className={'author_inf'}>
                Годы жизни <b>{date_of_live}</b>
              </div>
              <div className={'author_inf'}>
                {place_of_live !== '' && place_of_live !== null && place_of_live !== undefined ? (
                  <div>
                    Место жизни <b className={'author_inf'}>{place_of_live}</b>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          Жанр<b className={'author_inf'}>{section}</b>
          {statistic !== undefined && statistic.length > 0 ? (
            <div>
              <div className={'author_title_books'}>Любимые слова</div>
              {statistic.map(({ word, frequency }, index) => (
                <div
                  style={{
                    marginTop: 9,
                    fontSize: 21,
                  }}
                >
                  {word} — {getDescribeWord(index)}
                </div>
              ))}
            </div>
          ) : null}
          <br />
          <div className={'author_title_books'}>Его книги</div>
          <LinesBooks array={books} />
          {/*<LinesOfAuthorsBooks array={book}/>*/}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    name: state.authors.name,
    about: state.authors.about,
    section: state.authors.section,
    date_of_live: state.authors.date_of_live,
    place_of_live: state.authors.place_of_live,
    statistic: state.authors.statistic,
    books: state.authors.books,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getDataAuthor: bindActionCreators(getDataAuthor, dispatch),
    updateNavbar: bindActionCreators(update_navbar, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(AuthorPage)
