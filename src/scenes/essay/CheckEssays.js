import React, {useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Essay} from "../../components/molecules/Essays/Essay";
import {bindActionCreators} from "redux";
import {getCheckListEssays, setScoreStudent} from "../../store/lessons/actions";
import {connect} from "react-redux";
import EssayTabPanel from "../../components/organisms/EssayTabPanel";
import {MainTitle} from "../../components/atoms/Texts/MainTitle";

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

    tab_int_progress: {
        backgroundColor: "#fdf901",
    },

    body: {
        width: '80%',
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const CheckEssays = ({
    check_list_essays,
    getCheckListEssays,
    user_id,
                            }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        console.log("USER ID "+user_id)
        if(user_id!==undefined&&user_id!==""){
            getCheckListEssays(user_id)
        }
    },[user_id])

    useEffect(() => {
        console.log("check_list_essays "+check_list_essays)
    },[check_list_essays])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function getTab(text, check){
        let classes_tab = {};
        if(check == "checked"){
            classes_tab = classes.tab_checked
        }else if(check == "in_progress"){
            classes_tab = classes.tab_int_progress
        }

        return (
            <Tab
                label={text}
                className={classes_tab}
                style={{
                    fontWeight: 600,
                    fontSize: 16,
                }}
            />
        )
    }

    return (
        <div>
            <MainTitle
                style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: 'center',
                    marginBottom: 20,
                }}
                text={"Проверить сочинения"}
            />
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
                        check_list_essays.map(({
                                                   student_name,
                                                   check
                                               }) => (

                                   getTab(student_name,check)
                            )
                        )
                    }
                </Tabs>


                {
                    check_list_essays.map(({
                                               _id,
                                               topic,
                                               student_text,
                                               comment,
                                               student_id,
                                               check,
                                               score,
                                               student_name,
                                               teacher_text,
                                               teacher_name
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
                                textStudent={(teacher_text!==undefined)?teacher_text:student_text}
                                id_essay={_id}
                                checkEssay = {check}
                                score={score}
                                studentName={student_name}
                                teacherName = {teacher_name}
                                accordion = {
                                    {
                                        title: "Текст ученика (без правок)",
                                        text: student_text,
                                        visible: true,
                                    }
                                }
                                // commentEssay={
                                //     comment !== undefined ? comment : ""
                                // }
                            />
                        </TabPanel>
                    ))
                }
            </div>
        </div>
    );
}

const putStateToProps = state => {
    return {
        user_id: state.auth.token,
        check_list_essays: state.lessons.check_list_essays,
    }
}

const putDispatchToProps = dispatch => {
    return {
        getCheckListEssays: bindActionCreators(getCheckListEssays, dispatch),
    }
}

export default connect(putStateToProps, putDispatchToProps)(CheckEssays);