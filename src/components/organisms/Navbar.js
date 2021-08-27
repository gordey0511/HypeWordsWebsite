import React, {useEffect, useState} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link} from "react-router-dom";
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import {connect} from "react-redux";
import TabNavbar from "../atoms/TabNavbar/TabNavbar";
import {TabNavbarMain} from "../atoms/TabNavbar/TabNavbarMain";
import {TabNavbarRight} from "../atoms/TabNavbar/TabNavbarRight";
import {bindActionCreators} from "redux";
import {getUser} from "../../store/auth/actions";
import Button from "@material-ui/core/Button";
import {MenuNavbar} from "../atoms/Menus/MenuNavbar";
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';

const Navbar = ({
    current_text,
    name,
    getData
    // token,
}) => {

    const [token,setToken] = useState("")
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setToken(localStorage.getItem("token"))
    },[localStorage.getItem("token")])

    useEffect(() => {
        if(token!==undefined&&token!==null&&token!==""){
            getData(token)
        }
    },[token])

    useEffect(() => {
        console.log("CURRENT TEXT "+current_text)
    },[current_text])

    const handleClickNew = (event) => {
        setOpenMenu(event.currentTarget);
    };

    const handleCloseNew = () => {
        setOpenMenu(null)
    }

    return(
        <div className={"main_div"}>
            <TabNavbarMain
                tab_text={NAVBAR_TITLE.Home}
                current_text={current_text}
                link={"/"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Posts}
                current_text={current_text}
                link={"/posts"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Books}
                current_text={current_text}
                link={"/books"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Authors}
                current_text={current_text}
                link={"/authors"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Analyze}
                current_text={current_text}
                link={"/analyze"}
            />

            <div style={{
                marginLeft: 'auto',
                display: 'flex',
                flexDirection:'row',
                marginRight: 0,
                color: '#020707',
                justifyContent: 'flex-end',
                textAlign: 'right',
                float:'right',
                textDecoration: 'none',
                fontSize: 22,
            }}>
                <Button
                    // aria-controls="simple-menu"
                    // aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClickNew}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        margin: 20,
                        marginTop: 15,
                        fontWeight: 600,
                        fontSize: 17,
                    }}
                >
                    Создать
                </Button>

                <MenuNavbar
                    handleClose={handleCloseNew}
                    arrayButtons={[
                        {
                            text:"Урок",
                            link:"/create_topic",
                            icon: <EditIcon
                                style={{
                                    height:30,
                                    width:30,
                                }}
                            />
                        },
                        {
                            text:"Пост",
                            link:"/create_post",
                            icon: <PostAddIcon
                                style={{
                                    height:30,
                                    width:30,
                                }}
                            />
                        },
                    ]}

                    openMenu={openMenu}
                />
                {
                    (token === null||token === undefined||token === "")?
                        <TabNavbar
                            tab_text={NAVBAR_TITLE.Login}
                            current_text={current_text}
                            link={"/login"}
                        />
                        :
                        <TabNavbar
                            tab_text={name}
                            current_text={current_text}
                            link={"/profile"}
                        />
                }
            </div>

        </div>
    )
}


const putStateToProps = (state) => {
    return {
        current_text: state.navbar.current_text,
        name:state.auth.name,
        // token:state.auth.token,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData: bindActionCreators(getUser,dispatch),
    }
}


export default connect(putStateToProps,putDispatchToProps)(Navbar);