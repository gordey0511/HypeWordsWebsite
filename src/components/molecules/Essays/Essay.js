import React, {useEffect, useState} from "react";
import {MainTitle} from "../../atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../atoms/Buttons/ButtonMaterial";
import {Typography} from "@material-ui/core";
import {CommonText} from "../../atoms/Texts/CommonText";
import {CommonDialog} from "../Dialogs/CommonDialog";
import {CommonSelect} from "../../atoms/Selects/CommonSelect";

export const Essay = ({
    titleLesson,
    topicEssay,
    textEssay,
    handleStudentText,
    commentEssay,
          check,
    disabled = false,
                      }) => {

    return (
        <div className={"center_block"} style={{width: '100%', display: "flex"}}>
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
                value={textEssay}
                rows = {30}
                disabled = {disabled}
                changeValue={handleStudentText}
            />
        </div>
    )
}