import React from "react";
import InputIcon from '@material-ui/icons/Input';
import {MainTitle} from "../../atoms/Texts/MainTitle";
import {ButtonMaterial} from "../../atoms/Buttons/ButtonMaterial";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export const NeedRegistration = () => {
    return (
        <div>
            <InputIcon
                style={{
                    height: 100,
                    width: 100,
                }}
            />

            <Typography
                style={{
                    fontSize: 35,
                }}
            >
                Войдите в аккаунт
            </Typography>
            <Link to={"/login"} style={{
                textDecoration: 'none',
            }}>
                <ButtonMaterial text={"Войти"}/>
            </Link>
        </div>
    )
}