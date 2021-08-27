import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import "../../styles/blocks.css"
import {bindActionCreators} from "redux";
import {update_navbar} from "../../store/navbar/actions";
import {getAllBooks} from "../../store/books/actions";
import {connect} from "react-redux";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link, useHistory} from "react-router-dom";
import {FormAuth} from "../../components/molecules/FormAuth";
import {CardActionAuth} from "../../components/atoms/CardActionAuth";
import {createUser} from "../../store/auth/actions";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    left:{
        float:"left",
        textAlign:"left",
        fontSize: 25,
        // fontWeight: 520,
    },
});

const Register = ({
    token,
    updateNavbar,
    createUser,
    error,
}) => {
    const classes = useStyles();
    let history = useHistory()

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        if(token!==undefined&&token!==null&&token!==""){
            history.push("/")
        }
    },[token])

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleButton = () => {
        console.log("REGISTER START "+name+" "+email+" "+password)
        createUser(name,email,password);
    }

    useEffect(() => {
        updateNavbar(NAVBAR_TITLE.Login)
    },[])

    useEffect(() => {
        if(error!==undefined&&error!==""){
            alert("Все сломалось, исправьте данные")
        }
        console.log("ERROR REGISTER "+error)
    },[error])

    return (
        <div className={"block_vertical"}>
            <div className={"center_block_login"}>
                <Card
                    lassName={classes.root}
                    variant="outlined"
                    elevation={5}
                >
                    <div className={"padding_login"}>
                        <FormAuth
                            title={"Регистрация"}
                            text1={"Почта"}
                            text2={"Пароль"}
                            text_button={"зарегистрировать"}
                            email={email}
                            changeEmail={changeEmail}
                            password={password}
                            changePassword={changePassword}
                            name={name}
                            changeName={changeName}
                            handleButton = {handleButton}
                        />
                        <CardActionAuth text={"Уже есть аккаунт"} link={"/login"}/>
                    </div>
                </Card>
                {/*{name} {email} {password}*/}
            </div>
        </div>
    );
}


const putStateToProps = state => {
    return {
        token:state.auth.token,
        error:state.auth.error,
    }
}

const putDispatchToProps = dispatch => {
    return{
        updateNavbar: bindActionCreators(update_navbar,dispatch),
        createUser: bindActionCreators(createUser,dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(Register);