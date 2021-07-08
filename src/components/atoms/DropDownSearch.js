import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {classes} from "istanbul-lib-coverage";
import {TYPES_OF_BOOKS}  from "../../utils/constants";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export const DropDownSeacrh = ({handleChange,type}) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">Жанр</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={type}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value={"Все"}>Все</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Proza}>{TYPES_OF_BOOKS.Proza}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Poesia}>{TYPES_OF_BOOKS.Poesia}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Dramaturgia}>{TYPES_OF_BOOKS.Dramaturgia}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Perevodi}>{TYPES_OF_BOOKS.Perevodi}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Skazki}>{TYPES_OF_BOOKS.Skazki}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Detskaya}>{TYPES_OF_BOOKS.Detskaya}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Memuari}>{TYPES_OF_BOOKS.Memuari}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.History}>{TYPES_OF_BOOKS.History}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Publicistika}>{TYPES_OF_BOOKS.Publicistika}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Kritika}>{TYPES_OF_BOOKS.Kritika}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Philosophy}>{TYPES_OF_BOOKS.Philosophy}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Religion}>{TYPES_OF_BOOKS.Religion}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Politics}>{TYPES_OF_BOOKS.Politics}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Hist_Proza}>{TYPES_OF_BOOKS.Hist_Proza}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Biog_Proza}>{TYPES_OF_BOOKS.Biog_Proza}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Hum_and_sut}>{TYPES_OF_BOOKS.Hum_and_sut}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Trips}>{TYPES_OF_BOOKS.Trips}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Prevovedenie}>{TYPES_OF_BOOKS.Prevovedenie}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Ethnography}>{TYPES_OF_BOOKS.Ethnography}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Adventures}>{TYPES_OF_BOOKS.Adventures}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Pedagogika}>{TYPES_OF_BOOKS.Pedagogika}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Psychology}>{TYPES_OF_BOOKS.Psychology}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Geography}>{TYPES_OF_BOOKS.Geography}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Reference}>{TYPES_OF_BOOKS.Reference}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Anthropology}>{TYPES_OF_BOOKS.Anthropology}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Philology}>{TYPES_OF_BOOKS.Philology}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Zoology}>{TYPES_OF_BOOKS.Zoology}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Epistolary}>{TYPES_OF_BOOKS.Epistolary}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Botanics}>{TYPES_OF_BOOKS.Botanics}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Phantasy}>{TYPES_OF_BOOKS.Phantasy}</MenuItem>
                    <MenuItem value={TYPES_OF_BOOKS.Polit_economy}>{TYPES_OF_BOOKS.Polit_economy}</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}