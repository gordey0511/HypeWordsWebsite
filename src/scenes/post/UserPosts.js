import React, { useEffect } from 'react'
import { ListPosts } from '../../components/organisms/ListPosts'
import { bindActionCreators } from 'redux'
import { getAuthorPosts } from '../../store/posts/actions'
import { connect } from 'react-redux'
import { update_navbar } from '../../store/navbar/actions'
import { NAVBAR_TITLE } from '../../utils/constants'

const Posts = ({ posts, getPosts, update_navbar, token }) => {
  useEffect(() => {
    getPosts(token)
    update_navbar(NAVBAR_TITLE.Posts)
  }, [token])

  useEffect(() => {
    console.log('UPDATE ' + posts)
  }, [posts])

  return (
    <div>
      <ListPosts array={posts} />
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getPosts: bindActionCreators(getAuthorPosts, dispatch),
    update_navbar: bindActionCreators(update_navbar, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Posts)
