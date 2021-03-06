import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { getAuthorNamePost, getPost } from '../../store/posts/actions'
import { connect } from 'react-redux'
import { MainTitle } from '../../components/atoms/Texts/MainTitle'
import { CommonText } from '../../components/atoms/Texts/CommonText'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import { CardActionArea, makeStyles } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import { styleCard } from '../../styles/style'
import { getStringDate } from '../essay/SendEssay'
import { AuthorIcon } from '../../components/atoms/AuthorIcon'

const PostPage = ({
  title,
  text,
  post_id,
  author_id,
  authorName,
  likes,
  getPost,
  getAuthorName,
  publication_time,
}) => {
  const link = window.location.pathname
  const token = link.substr(6, link.length - 6)
  const classes = makeStyles(styleCard)

  useEffect(() => {
    getPost(token)
  }, [])

  // useEffect(() => {
  //     if(author_id!==undefined){
  //         getAuthorName(token,author_id)
  //     }
  // },[author_id])

  return (
    <div className={'middle_block_post'}>
      <div className={'center_block'}>
        <Card className={classes.post_page} variant={'outlined'}>
          <CardContent>
            <AuthorIcon authorName={authorName} author_id={author_id} />
            <MainTitle text={title} />
            {/*{getStringDate(publication_time)}*/}
            {/*<div style={{ textAlign: 'left' }}>{authorName}</div>*/}
            <div
              style={{
                fontSize: 16,
                textAlign: 'left',
              }}
              className={'ck-content'}
              dangerouslySetInnerHTML={{ __html: `${text}` }}
            />
            {/*<CommonText*/}
            {/*    body={"h6"}*/}
            {/*    text={`${likes} лайков`}*/}
            {/*/>*/}
          </CardContent>
          {/*</CardActionArea>*/}
          {/*</Link>*/}
        </Card>
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    title: state.posts.title,
    text: state.posts.text,
    author_id: state.posts.author_id,
    authorName: state.posts.authorName,
    likes: state.posts.likes,
    publication_time: state.posts.publication_time,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getPost: bindActionCreators(getPost, dispatch),
    getAuthorName: bindActionCreators(getAuthorNamePost, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(PostPage)
