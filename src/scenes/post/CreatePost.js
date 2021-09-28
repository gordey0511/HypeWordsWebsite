import React, {useEffect, useState} from "react";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import "../../styles/blocks.css"
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {bindActionCreators} from "redux";
import {createPost} from "../../store/posts/actions";
import {connect} from "react-redux";
import {update_navbar} from "../../store/navbar/actions";
import {loginUser} from "../../store/auth/actions";
import {NAVBAR_TITLE} from "../../utils/constants";
import { useHistory } from "react-router-dom"
import {NeedRegistration} from "../../components/molecules/NeedRegistration";
import {EssayCheckingCKEditor} from "../../components/atoms/TextsInput/EssayCheckingCKEditor";
import {CommonText} from "../../components/atoms/Texts/CommonText";
import Typography from "@material-ui/core/Typography";
import {SimpleTooltip} from "../../components/atoms/Tooltips/SimpleTooltip";

const CreatePost = ({
                        token,
                        createPostAction,
                        update_navbar,
                    }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("public");
    const [typex,setTypex] = useState(false);
    let history = useHistory();

    useEffect(() => {
        update_navbar(NAVBAR_TITLE.CreatePost)
    },[])

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleType = ({ target: { checked } }) => {
        setTypex(checked);
        if(checked){
            setType("private")
        }
        else{
            setType("public")
        }
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    const sendPost = () => {
        console.log("NEW POST INF "+title+" "+text+" "+ " " + type)
        createPostAction(title, text, token,type);
        history.push("/posts")
    }

    return (
        <div className={"center_block"}
             style={{width: '66%',
                flexDirection: 'column',
                 display: 'flex',
             }}
        >
            {(token!==undefined&& token !== "")?
                <div
                    style={{
                        flexDirection: 'column',
                        display: 'flex',
                    }}

                >
                    <MainTitle text={"Новый пост"}/>
                    <TextFieldMaterial
                        styles={{marginBottom: 20,fontSize: 45}}
                        label={"Заголовок"}
                        value={title}
                        changeValue={handleTitle}
                    />
                    <EssayCheckingCKEditor
                        data={text}
                        onChange={setText}
                        label={"Текст поста"}
                        rows = {67}
                        placeholder={"Текст поста"}
                        style={{
                            marginBottom: 0,
                            marginTop: 20,
                        }}
                    />
                    <div className={"inline_block"}>
                        <SimpleTooltip text={"Пост не будет отображаться в общем списке, только в вашем профиле"}>
                            <Typography>Создать приватный пост? </Typography>
                        </SimpleTooltip>
                        <input
                            type="checkbox"
                            checked={typex}
                            onChange={handleType}
                        />
                    </div>

                    <ButtonMaterial
                        text={"Опубликовать"}
                        styles={{marginTop: 40,
                            marginBottom: 20,
                            width: '100%',
                            // height: 50,
                            // color: "#ffffff",
                            // background: "#d52222",
                        }}
                        color={"primary"}
                        handleClick={sendPost}/>
                </div>
                :
                <NeedRegistration/>
            }
        </div>
    )
}

// const putStateToProps = state => {
//     return {
//         token: state.auth.token,
//     }
// }
//
// const putDispatchToProps = dispatch => {
//     return {
//         createPostAction: bindActionCreators(createPost, dispatch),
//     }
// }
//
// export default connect(putStateToProps, putDispatchToProps)(CreatePost);

const putStateToProps = state => {
    state.auth.token = localStorage.getItem("userToken");
    return {
        token: state.auth.token,
    }
}

const putDispatchToProps = dispatch => {
    return {
        createPostAction: bindActionCreators(createPost, dispatch),
        update_navbar: bindActionCreators(update_navbar, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(CreatePost);