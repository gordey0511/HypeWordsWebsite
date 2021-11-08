import React from 'react'
import '../../../styles/main.css'

export const MainTitle = ({ text, style }) => {
  return (
    <div className={'main_title'} style={style}>
      {text}
    </div>
  )
}
