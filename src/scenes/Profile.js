import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ButtonMaterial} from "../components/atoms/ButtonMaterial";
import {bindActionCreators} from "redux";
import {getFavoriteBooks, logOut} from "../store/auth/actions";
import {Link, useHistory} from "react-router-dom";
import {update_navbar} from "../store/navbar/actions";
import Login from "./Login";
import {NAVBAR_TITLE} from "../utils/constants";
import "../styles/blocks.css"
import {LinesBooks} from "../components/molecules/LinesBooks";


const Profile = ({
    name,
    token,
    email,
    logout,
    favorites,
    updateNavbar,
    getFavoriteBooks,
                 }) => {
    let history = useHistory()

    useEffect(() => {
        console.log("PROFILE NAVBAR "+NAVBAR_TITLE.Profile+" "+token)
        updateNavbar(name)
    },[])

    useEffect(() => {
        if(token!==undefined&&token!==null&&token!==""){
            console.log("FAVORITE BOOKS "+token)
            getFavoriteBooks(token)
        }
    },[token])

    const handleButton = () => {
        logout()
        history.push("/")
    }

    return (
        <div className={"block_profile"}>
            <div className={"profile_name"}>
                {name}
            </div>
            <div className={"profile_email"}>
                {email}
            </div>
            <ButtonMaterial
                text={"Выйти"}
                handleClick={handleButton}
                color={"secondary"}
            />


            <div className={"profile_bookmark"}>
                Избранные книги
            </div>
            <LinesBooks array={favorites}/>
            <br/>
            <br/>
        </div>
    )
}


const putStateToProps = (state) => {
    return {
        token: state.auth.token,
        name: state.auth.name,
        email: state.auth.email,
        favorites: state.auth.favorites,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        updateNavbar: bindActionCreators(update_navbar,dispatch),
        logout: bindActionCreators(logOut,dispatch),
        getFavoriteBooks: bindActionCreators(getFavoriteBooks,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(Profile);