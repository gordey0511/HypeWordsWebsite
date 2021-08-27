import React from "react";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";
import {TextFieldMaterial} from "../../components/atoms/TextsInput/TextFieldMaterial";
import {MultilineTextInput} from "../../components/atoms/TextsInput/MultilineTextInput";
import {ButtonMaterial} from "../../components/atoms/Buttons/ButtonMaterial";

export const CheckEssay = () => {
    return (
        <div className={"center_block"} style={{width: '66%', display: "flex"}}>
            <MainTitle text={"Урок 1"}/>
            <text style={{textAlign: "left"}}>
                Ученик Завьялов Гордей 10В СУНЦ МГУ
            </text>

            <TextFieldMaterial
                styles={{marginBottom: 10,fontSize: 45}}
                label={"Тема сочинения"}
                disabled={true}
                value={"Война и мир"}
                // changeValue={handleTitle}
            />
            <MultilineTextInput
                styles={{marginBottom: 20,}}
                label={"Текст сочинения"}
                value={"sddsds"}
                rows = {30}
                // changeValue={handleText}
            />

            <MultilineTextInput
                styles={{marginBottom: 20,}}
                label={"Комментарий учителю"}
                value={"DSDSDSDS"}
                rows = {1}
                helperText={"Необязательно"}
                // changeValue={handleComment}
            />

            <ButtonMaterial
                text={"Отправить сочинение на проверку"}
                styles={{marginTop: 20,
                    marginBottom: 20,
                    width: '100%',
                    // height: 50,
                    // color: "#ffffff",
                    // background: "#d52222",
                }}
                color={"primary"}
                // handleClick={handleButton}
            />
        </div>
    )
}