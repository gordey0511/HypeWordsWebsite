import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {TextFieldMaterial} from "../atoms/TextFieldMaterial";
import {ButtonMaterial} from "../atoms/ButtonMaterial";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    margin: {
        margin: 14,
        padding: 14,
    },

    left:{
        float:"left",
        textAlign:"left",
        fontSize: 25,
        // fontWeight: 520,
    },
    pos: {
        marginBottom: 12,
    },
});


export const FormAuth = ({
                             title,
                             text1,
                             text2,
                             text_button,
                             email,
                             changeEmail,
                             password,
                             changePassword,
                             name,
                             changeName,
                             handleButton,
                         }) => {
    const classes = useStyles();

    return (
        <CardContent>
            <div
                className={"center_block_login"}
            >
                <Typography
                    className={classes.left}
                >
                    <b>{title}</b>
                </Typography>
                {
                    (name!==undefined)?
                        <div>
                            <TextFieldMaterial
                                className={classes.margin}
                                value={name}
                                label={"Имя"}
                                changeValue={changeName}
                            />
                            <br/>
                        </div>
                    :
                    <div></div>
                }
                <br/>
                <TextFieldMaterial
                    className={classes.margin}
                    value={email}
                    label={text1}
                    changeValue={changeEmail}
                />
                <br/>
                <TextFieldMaterial
                    className={classes.margin}
                    label={text2}
                    value={password}
                    changeValue={changePassword}
                />
                <br/>
                <br/>
                <ButtonMaterial
                    handleClick = {handleButton}
                    text={text_button}
                />
            </div>
        </CardContent>

    )
}