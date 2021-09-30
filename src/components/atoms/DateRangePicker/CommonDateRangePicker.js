import * as React from 'react'
import addWeeks from 'date-fns/addWeeks'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateRangePicker from '@mui/lab/DateRangePicker'
import Box from '@mui/material/Box'

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined
}

export const CommonDateRangePicker = ({ date, setDate, style, startText, endText }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={date}
        startText={startText}
        endText={endText}
        maxDate={getWeeksAfter(date[0], 4)}
        onChange={(newValue) => {
          setDate(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box
              style={{
                verticalAlign: 'center',
              }}
              sx={{ mx: 2 }}
            >
              {' '}
              до{' '}
            </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}
