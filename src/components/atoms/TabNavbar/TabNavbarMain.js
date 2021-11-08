import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CardMedia } from '@material-ui/core'
import { NAVBAR_TITLE } from '../../../utils/constants'

const useStyles = makeStyles({
  button_navbar: {
    fontWeight: 600,
    fontSize: 18,
  },
})

export const TabNavbarMain = ({ tab_text, current_text, link }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log('TabNavbar ' + tab_text + ' ' + current_text)
  }, [])

  return (
    // ((tab_text === current_text) ?
    //     <Link to={link} className={"invested_div"}>
    //         <div className={"outer_block_red"}>
    //             <Button  className={classes.button_navbar}>
    //                 <CardMedia
    //                     image={"./logo192.png"}
    //                     src="./logo192.png" className={"img_logo"}/>
    //                 <b className={"center_block"}>
    //                     <text style={{color:"#2657eb", marginLeft: 10,}}>
    //                         {tab_text}
    //                     </text>
    //                 </b>
    //             </Button>
    //         </div>
    //     </Link>
    //     :
    <Link to={link} className={'invested_div'}>
      <div className={'outer_block'}>
        <Button className={classes.button_navbar}>
          <CardMedia image={'..//logo512.png'} src="./logo512.png" className={'img_logo'} />
          <b className={'center_block'}>
            {tab_text === NAVBAR_TITLE.Home ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <text style={{ color: '#de6161', marginLeft: 10 }}>HypeWords</text>
                {/*<text style={{color:"#2657eb", marginLeft: 1,}}>*/}
                {/*    Place*/}
                {/*</text>*/}
              </div>
            ) : (
              <text style={{ color: '#2657eb', marginLeft: 10 }}>{tab_text}</text>
            )}
          </b>
        </Button>
      </div>
    </Link>
    // )
  )
}
