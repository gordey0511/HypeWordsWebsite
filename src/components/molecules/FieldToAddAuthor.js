import React, { useEffect, useState } from 'react'

export const FieldToAddAuthor = ({ onClickFun }) => {
  const [Name, setName] = useState('')
  const [Surname, setSurname] = useState('')
  const [Date, setDate] = useState('')

  useEffect(() => {
    // console.log("CREATE")
  }, [])

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeSurname = (event) => {
    setSurname(event.target.value)
  }
  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const handleClick = () => {
    console.log('handleClickAddAuthor')
    onClickFun({ name: Name, surname: Surname, date_birth: Date })
  }

  return (
    <div style={styles.main}>
      <div style={styles.input_box}>
        <label style={styles.label_box}>
          <div>
            Имя
            <input
              style={styles.input_box}
              type="text"
              value={Name}
              size="40"
              onChange={onChangeName}
            />
          </div>
          <div>
            Фамилия
            <input
              style={styles.input_box}
              type="text"
              value={Surname}
              size="40"
              onChange={onChangeSurname}
            />
          </div>
          <div>
            Дата рождения
            <input
              style={styles.input_box}
              type="text"
              value={Date}
              size="40"
              onChange={onChangeDate}
            />
          </div>
        </label>
        <button onClick={handleClick} style={styles.button_flex} title={'добавить'}>
          Добавить
        </button>
      </div>
    </div>
  )
}

const styles = {
  main: {
    display: 'flex',
    // flexGrow: 5,
    flexDirection: 'column',
    backgroundColor: '#e0e2e5',
    borderRadius: 19,
  },

  button_flex: {
    marginTop: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height: 'auto',
  },

  label_box: {
    display: 'flex',
    flexDirection: 'column',
  },

  input_box: {
    justifyContent: 'flex-end',
    fontWeight: 500,
    color: '#000000',
    margin: 15,
  },
}
