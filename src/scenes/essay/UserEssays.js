import React, {useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Essay} from "../../components/molecules/Essays/Essay";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import EssayTabPanel from "../../components/organisms/EssayTabPanel";
import {getUserEssays} from "../../store/auth/actions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            // style={{
            //     width: '90%',
            // }}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
        width: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    tabs: {
        width: '20%',
        borderRight: `1px solid ${theme.palette.divider}`,
    },

    tab_checked: {
        backgroundColor: "#46d713",
    },

    tab_start_check: {
        backgroundColor: "#d5d20e",
    },

    body: {
        width: '80%',
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const UserEssays = ({
                         list_essays,
                         user_id,
                         getUserEssays,
                     }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        console.log("USER ID "+user_id)
        getUserEssays(user_id)
    },[])

    useEffect(() => {
        console.log("check_list_essays "+list_essays)
    },[list_essays])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                color={"primary"}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {
                    list_essays.map(({
                                               topic,
                                               check
                                           }) => (

                            (check!==undefined&&check === "checked")?
                                <Tab
                                    label={topic}
                                    className={classes.tab_checked}
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 16,
                                    }}
                                />
                                :
                                <Tab
                                    label={topic}
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 16,
                                    }}
                                />

                        )
                    )
                }
            </Tabs>


            {
                list_essays.map(({
                                           _id,
                                           topic,
                                           student_text,
                                           comment,
                                           student_id,
                                           check,
                                           score,
                                           student_name,
                                       },
                                 index
                ) => (
                    <TabPanel
                        value={value}
                        index={index}
                        className = {classes.body}
                    >
                        <EssayTabPanel
                            // titleLesson={"Урок"}
                            topicEssay={topic}
                            textEssay={student_text}
                            id_essay={_id}
                            checkEssay = {check}
                            score={score}
                            studentName={student_name}
                            // commentEssay={
                            //     comment !== undefined ? comment : ""
                            // }
                        />
                    </TabPanel>
                ))
            }
        </div>
    );
}

const putStateToProps = state => {
    return {
        user_id: localStorage.getItem("userToken"),
        list_essays: state.auth.essays,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getUserEssays: bindActionCreators(getUserEssays, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(UserEssays);