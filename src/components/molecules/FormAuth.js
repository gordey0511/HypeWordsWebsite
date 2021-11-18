import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { TextFieldMaterial } from '../atoms/TextsInput/TextFieldMaterial'
import { ButtonMaterial } from '../atoms/Buttons/ButtonMaterial'
import { makeStyles } from '@material-ui/core/styles'
import { MainTitle } from '../atoms/Texts/MainTitle'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  margin: {
    margin: 50,
    padding: 14,
  },

  left: {
    float: 'left',
    textAlign: 'left',
    fontSize: 25,
    // fontWeight: 520,
  },
  pos: {
    marginBottom: 12,
  },
})

export const FormAuth = ({
  title,
  text1,
  text2,
  text_button,
  email,
  changeEmail,
  password,
  changePassword,
  name,
  changeName,
  surname,
  changeSurname,
  handleButton,
}) => {
  const classes = useStyles()

  const handleKeyPress = (target) => {
    if (target.key === 'Enter') {
      handleButton()
    }
  }

  return (
    <CardContent className={classes.root} onKeyDown={handleKeyPress}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        // style={{ display: 'flex', width: 400 }}
        onKeyDown={handleKeyPress}
        className={'center_block_login'}
        // style={{
        //     width: 00,
        // }}
      >
        <MainTitle text={title} />
        {name !== undefined ? (
          <div>
            <p style={{ fontSize: 15, textAlign: 'left', margin: 0 }}>
              Пожалуйста, введите ваше настоящее имя и фамилию
            </p>
            <TextFieldMaterial
              className={classes.margin}
              value={name}
              label={'Имя'}
              styles={{
                display: 'flex',
              }}
              changeValue={changeName}
            />
            <TextFieldMaterial
              className={classes.margin}
              value={surname}
              label={'Фамилия'}
              changeValue={changeSurname}
              styles={{
                display: 'flex',
                marginTop: 15,
                marginBottom: 15,
              }}
            />
          </div>
        ) : null}
        <TextFieldMaterial
          className={classes.margin}
          value={email}
          label={text1}
          type={'email'}
          changeValue={changeEmail}
          styles={{
            display: 'flex',
          }}
        />
        <TextFieldMaterial
          className={classes.margin}
          styles={{
            display: 'flex',
            marginTop: 15,
          }}
          label={text2}
          onKeyDown={handleKeyPress}
          type={'password'}
          value={password}
          changeValue={changePassword}
        />
        <ButtonMaterial
          color={'primary'}
          styles={{
            marginTop: 35,
          }}
          handleClick={handleButton}
          text={text_button}
        />
      </div>
    </CardContent>
  )
}
