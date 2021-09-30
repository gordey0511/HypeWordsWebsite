import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const BookOfList = ({ name, index = 0 }) => {
  useEffect(() => {}, [])

  return (
    <div>
      <Link to={`/book/${index}`} style={styles.name}>
        {name}
      </Link>
    </div>
  )
}

const styles = {
  name: {
    textDecoration: 'none',
    color: '#fd0404',
    fontSize: 25,
  },
}
