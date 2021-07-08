import React from "react";
import "../../styles/blocks.css";
import "../../styles/img.css";
// import "../../styles/input.css";
import {InputField} from "../atoms/InputField";
import {DropDownSeacrh} from "../atoms/DropDownSearch";
import {Slider} from "@material-ui/core";
import {LINES} from "../../utils/constants";

export const SearchField = ({
                                valueSearch,
                                onChange,
                                onClickEvent,
                                handleChangeSearch,
                                type,
                                valueSlider,
                                handleChangeSlider,
                                ids,
                            }) => {
    return(
        <div className={"search_field"}>
            <InputField class={"search_input"} value={valueSearch} onChange={onChange} onClickEvent={onClickEvent}/>
            <DropDownSeacrh class={"search_filter"} handleChange={handleChangeSearch} type={type} ids={ids}/>
            { (ids === LINES.books) ?
            <Slider
                value={valueSlider}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                step={5}
                min={1700}
                max={2021}
                aria-labelledby="range-slider"
                getAriaValueText={valueSearch}
            />
                :
                null
            }
        </div>
    );
}