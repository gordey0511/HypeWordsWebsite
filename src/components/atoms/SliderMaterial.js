import React, {useEffect} from "react";
import {LINES} from "../../utils/constants";
import {withStyles} from "@material-ui/core/styles";
import {Slider} from "@material-ui/core";
import "../../styles/slider.css"

const PrettoSlider = withStyles({
    root: {
        color: '#2657eb',
        height: 8,
        width:'77%',
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


export const SliderMaterial = ({
                                   valueSlider,
                                   handleChangeSlider,
                                   valueSearch,
                                   ids,
                               }) => {

    useEffect(() => {
       console.log("SLIDER MATERIAL "+ids)
    },[])
    return (
        <div>
            {
                (Number(ids) === LINES.books) ?
                    <div className={"div_slider"}>
                        <text className={"text_slider"}>
                            1700 год
                        </text>
                        <PrettoSlider
                            // className={cla}
                            value={valueSlider}
                            onChange={handleChangeSlider}
                            valueLabelDisplay="auto"
                            step={5}
                            // onChangeCommitted={handleChangeSlider}
                            // onChangeCapture={handleChangeSlider}
                            // onClick={handleChangeSlider}
                            min={1700}
                            max={2021}
                            aria-labelledby="range-slider"
                            getAriaValueText={valueSearch}
                        />
                        <text className={"text_slider"}>
                            2021 год
                        </text>
                    </div>
                    : null
            }
        </div>

    )
}