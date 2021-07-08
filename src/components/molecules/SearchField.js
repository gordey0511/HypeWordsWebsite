import React from "react";
import "../../styles/blocks.css";
import "../../styles/img.css";
// import "../../styles/input.css";
import {InputField} from "../atoms/InputField";
import {DropDownSeacrh} from "../atoms/DropDownSearch";

export const SearchField = ({value,onChange,onClickEvent}) => {
    return(
        <div className={"search_field"}>
            <InputField
                        class={"search_input"}
                        value={value}
                        onChange={onChange}
                        onClickEvent={onClickEvent}
            />
            <DropDownSeacrh class={"search_filter"}/>
        </div>
    );
}