import React, { useEffect } from 'react'
import { ListPosts } from '../../components/organisms/ListPosts'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../store/posts/actions'
import { connect } from 'react-redux'
import { update_navbar } from '../../store/navbar/actions'
import { NAVBAR_TITLE } from '../../utils/constants'
import { Loading } from '../../components/molecules/Problems/Loading'

const Posts = ({ posts, isLoading, getPosts, update_navbar }) => {
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
      {isLoading !== true ? (
        <ListPosts array={posts} />
      ) : (
        <Loading style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }} />
      )}
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getPosts: bindActionCreators(getPosts, dispatch),
    update_navbar: bindActionCreators(update_navbar, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Posts)
