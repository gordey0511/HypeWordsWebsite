import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import FactCheckIcon from '@mui/icons-material/FactCheck';
import ListIcon from '@material-ui/icons/List'
import BookIcon from '@mui/icons-material/Book'
import SettingsIcon from '@mui/icons-material/Settings'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import PostAddIcon from '@mui/icons-material/PostAdd'

export const profile_menu = {
  text: 'Профиль',
  link: '/profile',
  icon: (
    <AccountCircleIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const check_essays_menu = {
  text: 'Проверить сочинения',
  link: '/check_essays',
  icon: (
    <EditIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const new_lesson = {
  text: 'Урок',
  link: '/create_topic',
  icon: (
    <EditIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const new_post = {
  text: 'Пост',
  link: '/create_post',
  icon: (
    <PostAddIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const check_user_menu = {
  text: 'Мои сочинения',
  link: '/user_essays/',
  icon: (
    <BookIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_posts = {
  text: 'Посты',
  link: '/posts/',
  icon: (
    <ListIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_analyze = {
  text: 'Анализировать',
  link: '/analyze/',
  icon: (
    <PostAddIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_settings = {
  text: 'Настройки',
  link: '/profile',
  icon: (
    <SettingsIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_policy = {
  text: 'Политика конфеденциальности',
  link: 'http://ledokolpro.tilda.ws/policy',
  icon: (
    <PrivacyTipIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}
