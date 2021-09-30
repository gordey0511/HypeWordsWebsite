import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ArrowDropDown'
import Typography from '@material-ui/core/Typography'

export const CommonAccordion = ({ title, text, style }) => {
  return (
    <Accordion style={style} elevation={2}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: 600 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: `${text}` }} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
