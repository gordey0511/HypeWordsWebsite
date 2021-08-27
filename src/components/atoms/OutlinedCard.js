import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardActionArea} from "@material-ui/core";
import {Link} from "react-router-dom";
import {styleCard} from "../../styles/style";

const useStyles = makeStyles(styleCard);

export const OutlinedCard = ({id,text,type,year,link_text}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={`/${link_text}/${id}`} className={classes.link}>
                <CardActionArea>
                    <CardContent>
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
