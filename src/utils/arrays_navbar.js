import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ClassIcon from '@mui/icons-material/Class'
// import FactCheckIcon from '@mui/icons-material/FactCheck';
import ListIcon from '@material-ui/icons/List'
import BookIcon from '@mui/icons-material/Book'
import LibriaryBooksIcon from '@mui/icons-material/LibraryBooks'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import PostAddIcon from '@mui/icons-material/PostAdd'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ArticleIcon from '@mui/icons-material/Article'
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
  text: 'Мои уроки',
  link: '/check_essays',
  icon: (
    <ClassIcon
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
    <EditIcon
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
    <ArticleIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_manual_doc = {
  text: 'Инструкция',
  link: '/manual_doc/',
  icon: (
    <MenuBookIcon
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

export const open_books = {
  text: 'Книги',
  link: '/books/',
  icon: (
    <LibriaryBooksIcon
      style={{
        height: 30,
        width: 30,
      }}
    />
  ),
}

export const open_authors = {
  text: 'Авторы',
  link: '/authors/',
  icon: (
    <GroupIcon
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
