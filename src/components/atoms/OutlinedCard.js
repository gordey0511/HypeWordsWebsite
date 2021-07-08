import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardActionArea} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width:200,
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

    link:{
        textDecoration: 'none',
        color:"#272727",
        fontSize:25,
    },

    button:{
        textAlign: 'right',
        justifyContent: 'right',
        float:'right',
        // fontSize:23,
    }
});

export const OutlinedCard = ({id,text,type,year,link_text}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => {}}>
            <Link to={`/${link_text}/${id}`} className={classes.link}>
                <CardActionArea>
                    <CardContent>
                        {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*    2018 год*/}
                        {/*</Typography>*/}
                        <Typography variant="h5" component="h2">
                            {text}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {type.map((name) => (
                                <div>{name}</div>
                            ))
                            }
                        </Typography>
                        {
                            (year!==undefined&&year!=="")?
                                <Typography variant="body2" component="p">
                                    {year} год
                                </Typography>
                            :
                            <div></div>
                        }
                    </CardContent>
                </CardActionArea>
                {/*<CardActions className={classes.button}>*/}
                {/*    <Button size="small" className={classes.button}>Открыть</Button>*/}
                {/*</CardActions>*/}
            </Link>
        </Card>
    );
}
