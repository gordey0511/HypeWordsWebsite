import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {bindActionCreators} from "redux";
import {getFavoriteBooks, getUser, logOut} from "../../store/auth/actions";
import {Link, useHistory} from "react-router-dom";
import {update_navbar} from "../../store/navbar/actions";
import Login from "./Login";
import {NAVBAR_TITLE} from "../../utils/constants";
import "../../styles/blocks.css"
import {LinesBooks} from "../../components/molecules/LinesBooks";
import UserPosts from "../post/UserPosts";


const Profile = ({
                     name,
                     mainName,
                     userToken,
                     email,
                     logout,
                     getData,
                     favorites,
                     updateNavbar,
                     getFavoriteBooks,
                 }) => {
    let history = useHistory()
    const link = window.location.pathname
    console.log(link);
    const token = link.substr(6,link.length-6)
    console.log(token + " ! " + userToken);


    useEffect(() => {
        console.log("PROFILE NAVBAR UP "+NAVBAR_TITLE.Profile+": "+token)
        getData(token)
        updateNavbar(mainName)
    },[token])

    useEffect(() => {
        console.log("FAVORITE BOOKS "+token + " ! " + userToken)
        if(token!==undefined&&token!==null&&token!==""){
            console.log("FAVORITE BOOKS "+token)
            getFavoriteBooks(token)
        }
        else{
            getFavoriteBooks(userToken)
        }
    },[token])

    const handleButton = () => {
        logout()
        history.push("/")
    }

    const handleButtonCheckEssay = () => {
        history.push("/check_essays")
    }

    const handleButtonUserEssay = () => {
        history.push("/user_essays/"+token)
    }

    return (
        <div className={"block_profile"}>
            <div className={"profile_name"}>
                {name}
            </div>
            <div className={"profile_email"}>
                {email}
            </div>
            { (token === userToken) ?
                <div className={"block_profile_sub"}>
                    <ButtonMaterial
                        text={"Проверить сочинения"}
                        handleClick={handleButtonCheckEssay}
                        color={"primary"}
                        styles={{
                            width: 300,
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                    />

                    <ButtonMaterial
                        text={"Мои сочинения"}
                        handleClick={handleButtonUserEssay}
                        color={"primary"}
                        styles={{
                            width: 300,
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                    />

                    <ButtonMaterial
                        text={"Выйти"}
                        handleClick={handleButton}
                        color={"secondary"}
                        styles={{
                            width: 300,
                            marginTop: 10,
                        }}
                    />
                    <div className={"profile_bookmark"}>
                        Избранные книги
                    </div>
                    <LinesBooks array={favorites}/>
                </div>
                :
                <div>
                    <div className={"profile_bookmark"}>
                        Посты
                    </div>
                    <UserPosts token={token}/>
                </div>
            }
        </div>
    )
}


const putStateToProps = (state) => {
    state.auth.userToken = localStorage.getItem("userToken")
    return {
        mainName: state.auth.name,
        userToken: state.auth.userToken,
        name: state.auth.userName,
        email: state.auth.userEmail,
        favorites: state.auth.favorites,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getData: bindActionCreators(getUser,dispatch),
        updateNavbar: bindActionCreators(update_navbar,dispatch),
        logout: bindActionCreators(logOut,dispatch),
        getFavoriteBooks: bindActionCreators(getFavoriteBooks,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(Profile);