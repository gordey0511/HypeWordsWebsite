import React, {useState} from "react";
import '../../../styles/margins.css'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import editors from 'student-editor';
import {makeStyles} from "@material-ui/styles";
import produce from "immer";

const useStyles = makeStyles({
    wrapper: props => ({
        '&  .ck-content': {
            height: props.rows !== undefined && `${props.rows}ex`,
        }
    })
})

export const EssayCheckingCKEditor = React.memo((
    {
        label,
        data,
        onChange,
        rows,
        style,
        placeholder="",
    }) => {
    const classes = useStyles({rows});
    return (
        <div className={classes.wrapper} style={style}>
            <CKEditor
                data={data}
                label={label}
                onChange={(event, editor) => onChange(editor.getData())}
                editor={editors.TeacherEditor}
                config={produce(editors.TeacherEditor.defaultConfig, (config) => {
                    config.placeholder = placeholder
                })}
            />
        </div>
    )
});


export const EssayChecking = () => {
    const [data, setData] = useState(
        'Всем привет'
    )
    return <EssayCheckingCKEditor data={data} onChange={setData} />
}