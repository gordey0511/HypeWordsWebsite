import React, {useEffect} from "react";
import {
    AppBar,
    CircularProgress,
    Dialog,
    Divider,
    List,
    ListItem,
    ListItemText,
    Slide,
    Toolbar
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {bindActionCreators} from "redux";
import {getDataAuthor} from "../../store/authors/actions";
import {connect} from "react-redux";
import "../../styles/analyze.css"
import {Link} from "react-router-dom";
import {getUserWords} from "../../store/books/actions";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FullWidthAnalyzeResult = ({
    open,
    handleClose,
    similarAuthor,
    name,
    getDataAuthor,
    words,
    isLoadingWords,

                                       }) => {
    const classes = useStyles();

    useEffect(() => {
        words=[]
    },[])

    useEffect(() => {
        if (similarAuthor!==""){
            getDataAuthor(similarAuthor)
        }
    },[similarAuthor])

    const textWord = (cnt) => {
        cnt = Number(cnt)
        if(cnt>=50000){
            return <text>Очень часто используете</text>
        }else if(cnt>=10000){
            return <text>Довольно часто пишите</text>
        }else if(cnt>=1000){
            return <text>Частенько виден в тексте</text>
        }else{
            return <text>Нередко встречается</text>
        }
    }

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Результат
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Окей
                    </Button>
                </Toolbar>
            </AppBar>
            <List>
                <div className={"center_block"}>
                    <div className={"vertical_block_analyze"}>
                        <div className={"title_analyze"}>
                            Ваш стиль написания похож на автора
                            <Link className={"text_link_title"} to={`/author/&${similarAuthor}`}> {name}</Link>
                            <div className={"subtitle_analyze"}>
                                Вам нравятся такие слова
                            </div>
                            <div className={"text_analyze"}>
                                {
                                    (Boolean(isLoadingWords))?
                                        <CircularProgress/>
                                        :
                                        <div>
                                            {words.map(({name,cnt,rate}) => (
                                                <div>
                                                    <i>{name}</i> — {textWord(rate)}
                                                </div>
                                            ))}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </Dialog>
    )
}

const putStateToProps = (state) => {
    return {
        similarAuthor: state.books.similarAuthor,
        name: state.authors.name,
        words: state.books.words,
        isLoadingWords: state.books.isLoadingWords,
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        getDataAuthor: bindActionCreators(getDataAuthor,dispatch),
    }
}

export default connect(putStateToProps,putDispatchToProps)(FullWidthAnalyzeResult)