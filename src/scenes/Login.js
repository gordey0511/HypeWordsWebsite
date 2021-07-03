import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextFieldMaterial} from "../components/atoms/TextFieldMaterial";
import {ButtonMaterial} from "../components/atoms/ButtonMaterial";
import "../styles/blocks.css"

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
    pos: {
        marginBottom: 12,
    },
});

export const Login = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={"block_vertical"}>
            <div className={"center_block_login"}>
                <Card className={classes.root} variant="outlined" elevation={5}>
                    <CardContent>
                        <div className={"center_block_login"}>
                                <TextFieldMaterial label={"Почта"}/>
                                <TextFieldMaterial label={"Почта"}/>
                                <ButtonMaterial text={"Отправить"}/>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
