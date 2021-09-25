import React, {useState} from "react";
import '../../../styles/margins.css'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import editors from 'student-editor';

import {makeStyles} from "@material-ui/styles";
import produce from "immer";
import {BASE_URL} from "../../../utils/constants";

const useStyles = makeStyles({
    wrapper: props => ({
        '&  .ck-content': {
            height: props.rows !== undefined && `${props.rows}ex`,
        }
    })
})

export const TextCKEditor = (
    {
        label,
        data,
        onChange,
        rows,
        style,
        placeholder = "",
    }) => {
    const classes = useStyles({rows});
    const [stats, setStats] = useState({words: 0, characters: 0})
    return (
        <div className={classes.wrapper} style={style}>
            <CKEditor
                data={data}
                label={label}
                onChange={(event, editor) => onChange(editor.getData())}
                editor={editors.StudentEditor}
                config={produce(editors.StudentEditor.defaultConfig, (config) => {
                    config.wordCount = {
                        onUpdate: setStats,
                    };
                    config.placeholder = placeholder;
                })}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                    marginTop: 10,
                }}>
                <span>{`Количество слов: ${stats.words}`}</span>
            </div>
        </div>
    )
};
