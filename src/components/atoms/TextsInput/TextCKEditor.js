import React, {useState} from "react";
import '../../../styles/margins.css'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import editors from 'student-editor';

import {makeStyles} from "@material-ui/styles";

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
                config={{
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'indent',
                            'outdent',
                            '|',
                            'blockQuote',
                            'insertTable',
                            'undo',
                            'redo',
                            'word-count',
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    },
                    wordCount: {
                        onUpdate: setStats,
                    },
                    // This value must be kept in sync with the language defined in webpack.config.js.
                    language: 'ru',
                }}
            />
            <div>
                <span>Word count: </span><span>{stats.words}</span>
            </div>
        </div>
    )
};
