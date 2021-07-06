import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ButtonMaterial} from "../components/atoms/ButtonMaterial";
import {bindActionCreators} from "redux";
import {logOut} from "../store/auth/actions";
import {useHistory} from "react-router-dom";
import {update_navbar} from "../store/navbar/actions";
import Login from "./Login";
import {NAVBAR_TITLE} from "../utils/constants";

const Profile = ({
    name,
    token,
    email,
    logout,
    updateNavbar,
                 }) => {
    let history = useHistory()

    useEffect(() => {
        console.log("PROFILE NAVBAR "+NAVBAR_TITLE.Profile+" "+name)
        updateNavbar(name)
    },[])

    const handleButton = () => {
        logout()
        history.push("/")
    }

    return (
        <div style={{marginLeft:200,fontSize:22}}>
            Данные
            <br/>
            {token}
            <br/>
            {name}
            <br/>
            {email}
            <br/>
            <br/>
            <br/>
            <ButtonMaterial text={"Выйти"} handleClick={handleButton}/>
        </div>
    )
}


const putStateToProps = (state) => {
    return {
        token: state.auth.token,
        name: state.auth.name,
        email: state.auth.email,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        updateNavbar: bindActionCreators(update_navbar,dispatch),
        logout: bindActionCreators(logOut,dispatch)
    }
}

export default connect(putStateToProps,putDispatchToProps)(Profile);