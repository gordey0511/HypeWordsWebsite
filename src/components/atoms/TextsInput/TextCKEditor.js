import React, { useState } from 'react'
import '../../../styles/margins.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'

import { makeStyles } from '@material-ui/styles'
import produce from 'immer'
import { SERVER_URL } from '../../../utils/constants'
import { StudentEditor } from 'student-editor/build/ckeditor'

const useStyles = makeStyles({
  wrapper: (props) => ({
    '&  .ck-content': {
      height: props.rows !== undefined && `${props.rows}ex`,
    },
  }),
})

export const TextCKEditor = ({
  label,
  value,
  changeValue,
  rows,
  style,
  editor = StudentEditor,
  disabled = false,
  visible_cnt_words = false,
  placeholder = '',
}) => {
  const classes = useStyles({ rows })
  const [stats, setStats] = useState({ words: 0, characters: 0 })
  return (
    <div className={classes.wrapper} style={style}>
      <CKEditor
        data={value}
        label={label}
        disabled={disabled}
        onChange={(event, editor) => changeValue(editor.getData())}
        editor={editor}
        config={produce(editor.defaultConfig, (config) => {
          config.wordCount = {
            onUpdate: setStats,
          }
          config.placeholder = placeholder
        })}
      />
      {/*<div*/}
      {/*  style={{*/}
      {/*    justifyContent: 'left',*/}
      {/*    marginTop: 10,*/}
      {/*    display: visible_cnt_words ? 'flex' : 'none',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <span>{`Количество слов: ${stats.words}`}</span>*/}
      {/*</div>*/}
    </div>
  )
}
