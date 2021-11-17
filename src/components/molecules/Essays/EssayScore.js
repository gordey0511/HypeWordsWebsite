import React from 'react'
import { CommonSelect } from '../../atoms/Selects/CommonSelect'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'

export const EssayScore = ({
  valueSelect,
  handleChangeSelect,
  handleClick,
  textButton,
  textSelect,
  visible,
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: visible ? 'block' : 'none',
      }}
    >
      {
        <div>
          {valueSelect !== undefined && valueSelect !== null
            ? valueSelect.map(({ name, score }, index) => (
                <div>
                  <CommonSelect
                    label={name}
                    value={valueSelect[index].score}
                    disabled={disabled}
                    array={[
                      {
                        text: 'Единица',
                      },
                      {
                        text: 'Два',
                      },
                      {
                        text: 'Три',
                      },
                      {
                        text: 'Четыре',
                      },
                      {
                        text: 'Пять',
                      },
                    ]}
                    handleChange={handleChangeSelect(index)}
                    styles={{
                      display: visible ? 'flex' : 'none',
                      width: 250,
                      marginTop: 20,
                      textAlign: 'left',
                      justifyContent: 'left',
                    }}
                  />
                </div>
              ))
            : null}

          <ButtonMaterial
            text={!disabled ? textButton : 'Изменить результат'}
            styles={{
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
              // height: 50,
              // color: "#ffffff",
              // background: "#d52222",
            }}
            color={'primary'}
            handleClick={handleClick}
          />
        </div>
      }
    </div>
  )
}
