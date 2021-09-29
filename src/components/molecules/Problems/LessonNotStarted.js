import React from "react";
import InputIcon from '@material-ui/icons/Input';
import {MainTitle} from "../../atoms/Texts/MainTitle";
import {ButtonMaterial} from "../../atoms/Buttons/ButtonMaterial";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const LessonNotStarted = ({
                                    name,
                                     date,
                                 }
) => {
    return (
        <div>
            <AccessTimeIcon
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
                Урок «<b>{name}</b>» еще не начался.
                <br/>
                Начало {date}
            </Typography>
        </div>
    )
}