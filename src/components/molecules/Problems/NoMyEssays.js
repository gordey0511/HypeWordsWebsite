import React from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import PostAddIcon from '@mui/icons-material/PostAdd'

export const NoMyEssays = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // textAlign: 'center',
      }}
    >
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
        Вы не отправили еще ни одного сочинения
      </Typography>
      {/*<Link*/}
      {/*  to={'/create_post'}*/}
      {/*  style={{*/}
      {/*    textDecoration: 'none',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <ButtonMaterial text={'Создать пост'} />*/}
      {/*</Link>*/}
      {/*<br />*/}
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
