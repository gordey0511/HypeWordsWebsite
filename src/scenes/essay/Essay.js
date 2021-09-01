import React, {useState} from "react";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";
import {Typography} from "@material-ui/core";
import {CommonText} from "../../components/atoms/Texts/CommonText";
import {CommonDialog} from "../../components/molecules/Dialogs/CommonDialog";

export const Essay = ({
    titleLesson,
    topicEssay,
    textEssay,
    commentEssay,
                      }) => {

    const [text, setText] = useState(textEssay);

    const handleText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={"center_block"} style={{width: '90%', display: "flex"}}>
            <MainTitle text={titleLesson}/>
            {/*<text style={{textAlign: "left"}}>*/}
            {/*    Ученик Завьялов Гордей 10В СУНЦ МГУ*/}
            {/*</text>*/}

            <CommonText
                weight={600}
                text={topicEssay}
            />
            <MultilineTextInput
                styles={{marginBottom: 20,}}
                label={"Текст сочинения"}
                value={text}
                rows = {30}
                changeValue={handleText}
            />

            <CommonText
                styles={{
                    marginTop: 20,
                }}
                text={commentEssay}
            />

            <ButtonMaterial
                text={"Поставить оценку"}
                styles={{marginTop: 20,
                    marginBottom: 20,
                    width: '100%',
                    // height: 50,
                    // color: "#ffffff",
                    // background: "#d52222",
                }}
                color={"primary"}
                handleClick={handleText}
            />
        </div>
    )
}