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

const CreatePost = ({
                        token,
                        createPostAction,
                        update_navbar,
                    }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    let history = useHistory();

    useEffect(() => {
        update_navbar(NAVBAR_TITLE.CreatePost)
    },[])

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    const sendPost = () => {
        console.log("NEW POST INF "+title+" "+text+" ")
        createPostAction(title, text, token);
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
    return {
        token:state.auth.token,
    }
}

const putDispatchToProps = dispatch => {
    return {
        createPostAction: bindActionCreators(createPost, dispatch),
        update_navbar: bindActionCreators(update_navbar, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(CreatePost);