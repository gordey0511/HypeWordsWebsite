import React, { useEffect } from 'react'
import '../../styles/blocks.css'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import { CardActionArea, CardActions } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { bindActionCreators } from 'redux'
import { getAuthorNameListPost } from '../../store/posts/actions'
import { connect } from 'react-redux'
import { MainTitle } from '../atoms/Texts/MainTitle'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#272727',
    fontSize: 25,
  },
})

export const AuthorIcon = ({ authorName, author_id }) => {
  const classes = useStyles()

  return (
    <Link to={`/user/${author_id}`} className={classes.link}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 5,
        }}
      >
        <AccountCircleIcon
          style={{
            verticalAlign: 'center',
            paddingTop: 3,
          }}
        />
        <Typography
          variant={'h6'}
          style={{
            marginLeft: 10,
            verticalAlign: 'center',
          }}
        >
          {authorName}
        </Typography>
      </div>
    </Link>
  )
}
