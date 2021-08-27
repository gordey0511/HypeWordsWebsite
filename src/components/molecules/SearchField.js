import React from "react";
import "../../styles/blocks.css";
import "../../styles/img.css";
// import "../../styles/input.css";
import {InputField} from "../atoms/InputField";
import {DropDownSeacrh} from "../atoms/DropDownSearch";
import {SliderMaterial} from "../atoms/SliderMaterial";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import "../../styles/slider.css"
import "../../styles/blocks.css"
import {LINES} from "../../utils/constants";
import CardContent from "@material-ui/core/CardContent";
import {Card} from "@material-ui/core";
import {MainTitle} from "../atoms/Texts/MainTitle";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


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

    const classes = useStyles()

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <div className={"search_field"}>
                    <MainTitle text={"Поиск"}/>
                    <InputField
                        class={"search_input"}
                        value={valueSearch}
                        onChange={onChange}
                        onClickEvent={onClickEvent}
                    />

                    <div className={"slider_filter"}>
                        <div className={"slider_row_filter"}>
                            <div className={"slider_title"}>
                                Фильтры
                            </div>
                            <DropDownSeacrh className={"search_filter"} handleChange={handleChangeSearch} type={type} ids={ids}/>
                        </div>
                        <SliderMaterial
                            valueSlider={valueSlider}
                            handleChangeSlider={handleChangeSlider}
                            valueSearch={valueSearch}
                            ids={ids}
                        />
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}