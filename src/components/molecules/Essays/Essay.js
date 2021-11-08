import React, { useEffect, useState } from 'react'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { TextFieldMaterial } from '../../atoms/TextsInput/TextFieldMaterial'
import { MultilineTextInput } from '../../atoms/TextsInput/MultilineTextInput'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { CommonText } from '../../atoms/Texts/CommonText'
import { CommonDialog } from '../Dialogs/CommonDialog'
import { CommonSelect } from '../../atoms/Selects/CommonSelect'
import { TextCKEditor } from '../../atoms/TextsInput/TextCKEditor'
import editors from 'student-editor'
import { CommonAccordion } from '../Accordion/CommonAccordion'

export const Essay = ({
  titleLesson,
  topicEssay,
  textEssay,
  handleStudentText,
  commentEssay,
  check,
  accordion,
  disabled = false,
}) => {
  return (
    <div className={'center_block'} style={{ width: '100%', display: 'flex' }}>
      {/*<text style={{textAlign: "left"}}>*/}
      {/*    Ученик Завьялов Гордей 10В СУНЦ МГУ*/}
      {/*</text>*/}

      <CommonText weight={600} text={topicEssay} />
      <TextCKEditor
        style={{
          marginBottom: 2,
          marginTop: 20,
        }}
        editor={editors.TeacherEditor}
        label={'Текст сочинения'}
        value={textEssay}
        rows={50}
        disabled={disabled}
        changeValue={handleStudentText}
      />

      <CommonAccordion
        title={accordion.title}
        style={{
          textAlign: 'left',
          marginTop: 10,
          display: accordion.visible ? 'block' : 'none',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: accordion.text }} />
      </CommonAccordion>
    </div>
  )
}
