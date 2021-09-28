import React, {useEffect, useState} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import {connect} from "react-redux";
import TabNavbar from "../atoms/TabNavbar/TabNavbar";
import {TabNavbarMain} from "../atoms/TabNavbar/TabNavbarMain";
import {bindActionCreators} from "redux";
import {getUser} from "../../store/auth/actions";
import Button from "@material-ui/core/Button";
import {MenuNavbar} from "../atoms/Menus/MenuNavbar";
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';
import {AppBar, Tab, Toolbar} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";

const Navbar = ({
                    current_text,
                    userName,
                    getData
                    // token,
                }) => {

    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setToken(localStorage.getItem("userToken"))
    }, [localStorage.getItem("userToken")])
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setName(localStorage.getItem("userName"));
    }, [localStorage.getItem("userName")])
    console.log(name + " ! " + userName);

    // useEffect(() => {
    //     if (token !== undefined && token !== null && token !== "") {
    //         getData(token)
    //     }
    // }, [token])

    useEffect(() => {
        console.log("CURRENT TEXT " + current_text)
    }, [current_text])

    const handleClickNew = (event) => {
        setOpenMenu(event.currentTarget);
    };

    const handleCloseNew = () => {
        setOpenMenu(null)
    }

    return (
        <AppBar position={"static"} color={"default"} style={{marginBottom: 30}}>
            <Toolbar>
                <Tabs variant={"scrollable"} edge={"start"}>
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
                </Tabs>
                <div style={{flexGrow: 1}}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickNew}
                    size={"large"}
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        minWidth: 120,
                        // fontWeight: "inherit",
                        // fontSize: 17,
                    }}
                >
                    Создать
                </Button>
                <MenuNavbar
                    handleClose={handleCloseNew}
                    arrayButtons={[
                        {
                            text: "Урок",
                            link: "/create_topic",
                            icon: <EditIcon
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        },
                        {
                            text: "Пост",
                            link: "/create_post",
                            icon: <PostAddIcon
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        },
                    ]}
                    openMenu={openMenu}
                />
                {
                    (token === null || token === undefined || token === "") ?
                        <TabNavbar
                            tab_text={NAVBAR_TITLE.Login}
                            current_text={current_text}
                            link={"/login"}
                        />
                        :
                        <TabNavbar
                            tab_text={name}
                            current_text={current_text}
                            link={"/user/"+token}
                        />
                }
                {/*</Tabs>*/}
            </Toolbar>
        </AppBar>
    )
}


const putStateToProps = (state) => {
    state.auth.username = localStorage.getItem("userName")
    return {
        current_text: state.navbar.current_text,
        name: state.auth.name,
        userName: state.auth.userName,
        // token:state.auth.token,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData: bindActionCreators(getUser, dispatch),
    }
}


export default connect(putStateToProps, putDispatchToProps)(Navbar);