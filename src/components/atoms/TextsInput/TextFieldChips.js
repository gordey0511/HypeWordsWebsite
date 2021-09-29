import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import '../../../styles/margins.css'
import {makeStyles} from "@material-ui/styles";
import {IconButton, InputAdornment} from "@mui/material";
import {CommonChip} from "../Chips/CommonChip";

export const TextFieldChips = ({
                                      label,
                                      setLabel,
                                      value,
                                      helperText,
                                      onKeyDown,
                                      changeValue,
                                      type =  "text",
                                      disabled = false,
                                      styles = null
                                  }) => {
    const classes = makeStyles(styles)

    useEffect(() => {
        if (disabled) {
            // setLabel("")
        }
    },[disabled])

    return (
        <TextField
            classes={classes}
            value={value}
            style={styles}
            id="outlined-size-normal"
            label={label}
            type={type}
            onKeyDown={onKeyDown}
            variant="outlined"
            disabled={disabled}
            className={"margin_small"}
            onChange={changeValue}
            helperText={helperText}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            // onClick={handlePasswordVisibility}
                            // onMouseDown={handleMouseDownPassword}
                        >
                            <CommonChip/>
                            {/*{toggle.passwordVisibility && <Visibility />}*/}
                            {/*{!toggle.passwordVisibility && <VisibilityOff />}*/}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />

    )
}