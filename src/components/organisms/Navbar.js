import React, { useEffect, useState } from 'react'
import { NAVBAR_TITLE } from '../../utils/constants'
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import { connect } from 'react-redux'
import TabNavbar from '../atoms/TabNavbar/TabNavbar'
import { TabNavbarMain } from '../atoms/TabNavbar/TabNavbarMain'
import { bindActionCreators } from 'redux'
import { getUser } from '../../store/auth/actions'
import Button from '@material-ui/core/Button'
import { MenuNavbar } from '../atoms/Menus/MenuNavbar'
import PostAddIcon from '@material-ui/icons/PostAdd'
import EditIcon from '@material-ui/icons/Edit'
import { AppBar, Toolbar } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Tab } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import BSNavbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {
  check_essays_menu,
  check_user_menu,
  new_lesson,
  new_post,
  profile_menu,
} from '../../utils/arrays_navbar'
import { NavbarProfile } from '../molecules/NavbarProfile'

const Navbar = ({ current_text, userName, getData, token }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuProfile, setOpenMenuProfile] = useState(false)

  useEffect(() => {
    console.log('TOKEN USER ' + token)
    if (token !== undefined && token !== null && token !== '') {
      getData(token)
    }
  }, [token])

  useEffect(() => {
    console.log('CURRENT TEXT ' + current_text)
  }, [current_text])

  const handleClickNew = (event) => {
    setOpenMenu(event.currentTarget)
  }

  const handleCloseNew = () => {
    setOpenMenu(null)
  }

  const handleCloseProfile = () => {
    setOpenMenuProfile(null)
  }

  const handleProfile = (event) => {
    setOpenMenuProfile(event.currentTarget)
  }

  return (
    <BSNavbar expand="lg">
      <Container fluid>
        <TabNavbarMain tab_text={NAVBAR_TITLE.Home} current_text={current_text} link={'/'} />
        <BSNavbar.Toggle />
        <BSNavbar.Collapse>
          <Nav>
            <TabNavbar tab_text={NAVBAR_TITLE.Posts} current_text={current_text} link={'/posts'} />
            <TabNavbar tab_text={NAVBAR_TITLE.Books} current_text={current_text} link={'/books'} />
            <TabNavbar
              tab_text={NAVBAR_TITLE.Authors}
              current_text={current_text}
              link={'/authors'}
            />
            <TabNavbar
              tab_text={NAVBAR_TITLE.Analyze}
              current_text={current_text}
              link={'/analyze'}
            />
          </Nav>
          <div style={{ flexGrow: 1 }} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickNew}
              size={'large'}
              style={{
                marginTop: 20,
                marginBottom: 20,
                minWidth: 120,
              }}
            >
              Создать
            </Button>

            <MenuNavbar
              handleClick={handleCloseNew}
              arrayButtons={[new_lesson, new_post]}
              openMenu={openMenu}
            />

            {token === null || token === undefined || token === '' ? (
              <TabNavbar
                tab_text={NAVBAR_TITLE.Login}
                current_text={current_text}
                link={'/login'}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 20,
                }}
                onClick={handleProfile}
              >
                <TabNavbar tab_text={userName} current_text={current_text} />
                <ArrowDropDownIcon
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    verticalAlign: 'center',
                    flexDirection: 'column',
                    marginTop: 25,
                    marginLeft: -15,
                  }}
                />
              </div>
            )}

            <MenuNavbar
              handleClick={handleCloseProfile}
              arrayButtons={[profile_menu, check_essays_menu, check_user_menu()]}
              openMenu={openMenuProfile}
            />
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

const putStateToProps = (state) => {
  // state.auth.token = localStorage.getItem('userToken')
  return {
    current_text: state.navbar.current_text,
    userName: state.auth.userName,
    token: state.auth.token,
    // token: localStorage.getItem('userToken'),
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getUser, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Navbar)
