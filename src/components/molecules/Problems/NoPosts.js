import React from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { connect } from 'react-redux'
import { logOut, sendVerifyEmail } from '../../../store/auth/actions'

const NoPosts = () => {
  return (
    <div>
      <PostAddIcon
        style={{
          height: 100,
          width: 100,
        }}
      />

      <Typography
        style={{
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Вы не опубликовали еще ни одного поста
      </Typography>
      <Link
        to={'/create_post'}
        style={{
          textDecoration: 'none',
        }}
      >
        <ButtonMaterial text={'Создать пост'} />
      </Link>
      <br />
      {/*<Link*/}
      {/*  to={'/register'}*/}
      {/*  style={{*/}
      {/*    marginTop: 20,*/}
      {/*    display: 'block',*/}
      {/*    textDecoration: 'none',*/}
      {/*  }}*/}
      {/*>*/}
      {/*</Link>*/}
    </div>
  )
}

const putStateToProps = (state) => {
  return {}
}

const putDispatchToProps = (dispatch) => {
  return {}
}

export default connect(putStateToProps, putDispatchToProps)(NoPosts)
