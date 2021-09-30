import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import '../../styles/text.css'

export const TextBookmark = ({ handle }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={'book_bookmark'} onClick={handle}>
      <BookmarkIcon className={'book_bookmark_img'} />
      <div className={'book_bookmark_text'}>В избранном</div>
    </div>
  )
}
