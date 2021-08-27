import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../../../styles/button.css"
import {makeStyles, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button_navbar:{
        fontWeight: 600,
        fontSize: 18,
    },

    red_tab_navbar:{
        color: '#e65154',
    },

    invested_div:{
        margin: 20,
        marginTop: 15,
        color: '#020707',
        textDecoration: 'none',
        fontSize: 22,
}
})

const TabNavbar = ({
                       tab_text,
                       current_text,
                       link,
                       handleClick,
                   }) => {
    const classes = useStyles();

    // const { classes } = this.props;
    useEffect(() => {
    },[])

    return (

        // <div>
            ((tab_text === current_text) ?
            <Link className={classes.invested_div} to={link}>
                <Button className={classes.button_navbar}>
                    <div className={classes.red_tab_navbar}>
                        {tab_text}
                    </div>
                </Button>
            </Link>
            :
            <Link className={classes.invested_div} to={link}>
                <Button className={classes.button_navbar}>
                    {tab_text}
                </Button>
            </Link>

            )
        // </div>
    )
}

export default withStyles(styles)(TabNavbar);