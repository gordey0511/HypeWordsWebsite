import React from "react";
import "../../styles/blocks.css";
import "../../styles/img.css";
// import "../../styles/input.css";
import {InputField} from "../atoms/InputField";

export const SearchField = ({value,onChange}) => {
    return(
        <div className={"search_field"}>

            <InputField value={value} onChange={onChange}/>
        </div>
    );
}