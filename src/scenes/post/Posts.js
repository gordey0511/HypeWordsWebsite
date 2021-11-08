import React, { useEffect } from 'react'
import { ListPosts } from '../../components/organisms/ListPosts'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../store/posts/actions'
import { connect } from 'react-redux'
import { update_navbar } from '../../store/navbar/actions'
import { NAVBAR_TITLE } from '../../utils/constants'

const Posts = ({ posts, getPosts, update_navbar }) => {
  useEffect(() => {
    getPosts()
    update_navbar(NAVBAR_TITLE.Posts)
  }, [])

  useEffect(() => {
    console.log('UPDATE ' + posts)
  }, [posts])

  return (
    <div
      style={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
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
    getPosts: bindActionCreators(getPosts, dispatch),
    update_navbar: bindActionCreators(update_navbar, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Posts)
