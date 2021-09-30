import React, { useEffect } from 'react'
import { FieldToAddAuthor } from '../molecules/FieldToAddAuthor'
// import logo from './logo.svg';

export const AddAuthor = ({ addAuthor }) => {
  useEffect(() => {
    console.log('START_AddAuthor')
  }, [])

  return (
    <div className="App">
      <FieldToAddAuthor onClickFun={addAuthor} style={styles.field_author} />
    </div>
  )
}

const styles = {
  field_author: {},
}
