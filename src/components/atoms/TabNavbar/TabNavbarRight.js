import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import styles from "../../../styles/button.css";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button_navbar:{
        fontWeight: 600,
        fontSize: 18,
    },

     invested_div_right:{
        marginLeft: 'auto',
        right: 0,
        display: 'flex',
        flexDirection:'row',
        marginRight: 20,
        marginTop: 10,
        color: '#020707',
        justifyContent: 'flex-end',
        textAlign: 'right',
        float:'right',
        textDecoration: 'none',
        fontSize: 22,
    },

    red_tab_navbar:{
        color: '#e65154',
    },
})

export const TabNavbarRight = ({tab_text,current_text,link}) => {
    const classes = useStyles()

    useEffect(() => {
        console.log("TAB NAVBAR RIGHT "+tab_text+" "+current_text)
    },[])

    return (

        ((tab_text === current_text) ?
                <Link className={classes.invested_div_right} to={link}>
                        <Button className={classes.button_navbar}>
                            <div className={classes.red_tab_navbar}>
                            {tab_text}
                            </div>
                        </Button>
                </Link>
                :
                <Link className={classes.invested_div_right} to={link}>
                    <Button className={classes.button_navbar}>
                        {tab_text}
                    </Button>
                </Link>

        )
    )
}