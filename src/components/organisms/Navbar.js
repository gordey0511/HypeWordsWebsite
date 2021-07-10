import React, {useEffect, useState} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link} from "react-router-dom";
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import {connect} from "react-redux";
import TabNavbar from "../atoms/TabNavbar";
import {TabNavbarMain} from "../atoms/TabNavbarMain";
import {TabNavbarRight} from "../atoms/TabNavbarRight";
import {bindActionCreators} from "redux";
import {getDataUser} from "../../store/auth/actions";

const Navbar = ({
    current_text,
    name,
    getData
    // token,
}) => {

    const [token,setToken] = useState("")

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

    return(
        <div className={"main_div"}>
            {/*<Link to={"/"} className={"invested_div"}>*/}
            {/*    <div className={"outer_block"}>*/}
            {/*        <img src="logo.png" className={"img_logo"}/>*/}
            {/*        <b className={"center_block"}>*/}
            {/*            {NAVBAR_TITLE.Home}*/}
            {/*        </b>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            <TabNavbarMain
                tab_text={NAVBAR_TITLE.Home}
                current_text={current_text}
                link={"/"}
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

            {
                (token === null||token === undefined||token === "")?
                    <TabNavbarRight
                    tab_text={NAVBAR_TITLE.Login}
                    current_text={current_text}
                    link={"/login"}
                    />
                :
                    <TabNavbarRight
                        tab_text={name}
                        current_text={current_text}
                        link={"/profile"}
                    />
            }
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
        getData: bindActionCreators(getDataUser,dispatch),
    }
}


export default connect(putStateToProps,putDispatchToProps)(Navbar);