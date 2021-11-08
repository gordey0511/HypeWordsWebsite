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
  root: {
    // minWidth: '100%',
    // display: "block",
    width: '55%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    // float: "left",
    justifyContent: 'left',
    textAlign: 'left',
    flexDirection: 'column',
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  link: {
    textDecoration: 'none',
    color: '#272727',
    fontSize: 25,
  },

  button: {
    textAlign: 'right',
    justifyContent: 'right',
    float: 'right',
    // fontSize:23,
  },

  card_content: {
    marginLeft: 20,
  },
})

const Post = ({
  title,
  authorName,
  likes,
  author_id,
  text,
  short_text,
  id,
  getAuthorNameListPost,
}) => {
  const classes = useStyles()

  return (
    // <div className={"center_block"}>
    <Card className={classes.root} onClick={() => {}} variant={'outlined'}>
      {/*<Link to={`/post/${id}`} className={classes.link}>*/}
      <CardActionArea>
        <CardContent className={classes.card_content}>
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
          {/*<MainTitle text={title}/>*/}
          <Link to={`/post/${id}`} className={classes.link}>
            <Typography style={{ fontWeight: 500 }} variant="h5" component="h2">
              {title}
            </Typography>
            <div
              style={{
                fontSize: 16,
                textAlign: 'left',
              }}
              dangerouslySetInnerHTML={{ __html: `${short_text}` }}
            />
          </Link>
        </CardContent>
      </CardActionArea>
      {/*<CardActions className={classes.button}>*/}
      {/*    /!*<Button size="small" className={classes.button}>Открыть</Button>*!/*/}
      {/*</CardActions>*/}
    </Card>
    // </div>
  )
}

const putDispatchToProps = (dispatch) => {
  return {
    getAuthorNameListPost: bindActionCreators(getAuthorNameListPost, dispatch),
  }
}

export default connect(null, putDispatchToProps)(Post)

// const putStateToProps = state => {
//     return {
//         title: state.posts.title,
//         authorName: state.posts.authorName,
//     }
// }
