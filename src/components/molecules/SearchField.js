import React from "react";
import "../../styles/blocks.css";
import "../../styles/img.css";
// import "../../styles/input.css";
import {InputField} from "../atoms/InputField";
import {DropDownSeacrh} from "../atoms/DropDownSearch";
import {Slider} from "@material-ui/core";

export const SearchField = ({valueSearch,onChange,onClickEvent,handleChangeSearch,type}) => {
    const [value, setValue] = React.useState([1700, 2021]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className={"search_field"}>
            <InputField class={"search_input"} value={valueSearch} onChange={onChange} onClickEvent={onClickEvent}/>
            <DropDownSeacrh class={"search_filter"} handleChange={handleChangeSearch} type={type}/>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={5}
                min={1700}
                max={2021}
                aria-labelledby="range-slider"
                getAriaValueText={valueSearch}
            />
        </div>
    );
}