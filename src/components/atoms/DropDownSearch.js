import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {classes} from "istanbul-lib-coverage";

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

export const DropDownSeacrh = ({options,onSelectOption}) => {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    };
    let Proza = "Проза"
    let Poesia = "Поэзия"
    let Dramaturgia = "Драматургия"
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
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={Proza}>{Proza}</MenuItem>
                    <MenuItem value={Poesia}>{Poesia}</MenuItem>
                    <MenuItem value={Dramaturgia}>{Dramaturgia}</MenuItem>
                    <MenuItem value={4}>Переводы</MenuItem>
                    <MenuItem value={5}>Сказки</MenuItem>
                    <MenuItem value={6}>Детская</MenuItem>
                    <MenuItem value={7}>Мемуары</MenuItem>
                    <MenuItem value={8}>История</MenuItem>
                    <MenuItem value={9}>Публицистика</MenuItem>
                    <MenuItem value={10}>Критика</MenuItem>
                    <MenuItem value={11}>Философия</MenuItem>
                    <MenuItem value={12}>Религия</MenuItem>
                    <MenuItem value={13}>Политика</MenuItem>
                    <MenuItem value={14}>Историческая проза</MenuItem>
                    <MenuItem value={15}>Биографическая проза</MenuItem>
                    <MenuItem value={16}>Юмор и сатира</MenuItem>
                    <MenuItem value={17}>Путешествия</MenuItem>
                    <MenuItem value={18}>Правоведение</MenuItem>
                    <MenuItem value={19}>Этнография</MenuItem>
                    <MenuItem value={20}>Приключения</MenuItem>
                    <MenuItem value={21}>Педагогика</MenuItem>
                    <MenuItem value={22}>Психология</MenuItem>
                    <MenuItem value={23}>География</MenuItem>
                    <MenuItem value={24}>Справочная</MenuItem>
                    <MenuItem value={25}>Антропология</MenuItem>
                    <MenuItem value={26}>Филология</MenuItem>
                    <MenuItem value={27}>Зоология</MenuItem>
                    <MenuItem value={28}>Эпистолярий</MenuItem>
                    <MenuItem value={29}>Ботаника</MenuItem>
                    <MenuItem value={30}>Фантастика</MenuItem>
                    <MenuItem value={31}>Политэкономия</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}