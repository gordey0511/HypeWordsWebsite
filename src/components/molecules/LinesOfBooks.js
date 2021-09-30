import React, { useEffect, useState } from 'react'
import { BookOfList } from '../atoms/BookOfList'
import axios from 'axios'
import { SearchField } from './SearchField'
import '../../styles/blocks.css'

export const LinesOfBooks = ({ array }) => {
  useEffect(() => {}, [])

  const [filter, setFilter] = useState('')
  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const lowercasedFilter = filter.toLowerCase()
  const filteredData = array.filter((item) => {
    return Object.keys(item).some((key) => item[key].toLowerCase().includes(lowercasedFilter))
  })

  return (
    <div>
      <div className={'center_block'}>
        <SearchField value={filter} onChange={handleChange} />
        {filteredData.map((item) => (
          <div style={styles.li} key={item.name}>
            <BookOfList name={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  block: {
    position: 'relative',
    color: '#000000',
    marginLeft: '20%',
    marginRight: '20%',
    backgroundColor: '#404040',
    borderRadius: 20,
  },

  li: {
    listStyleType: 'none',
    padding: 10,
    textDecoration: 'none',
    textAlign: 'center',
  },
}
