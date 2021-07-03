import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AuthorAPI} from "../../services/AuthorApi";

export const TabNavbarMain = ({tab_text,current_text,link}) => {

    useEffect(() => {
        console.log("TabNavbar "+tab_text+" "+current_text)
    },[])

    return (

        ((tab_text === current_text) ?
            <Link to={link} className={"invested_div"}>
                <div className={"outer_block_red"}>
                    <img src="logo.png" className={"img_logo"}/>
                    <b className={"center_block"}>
                        {tab_text}
                    </b>
                </div>
            </Link>
            :
            <Link to={link} className={"invested_div"}>
                <div className={"outer_block"}>
                    <img src="logo.png" className={"img_logo"}/>
                    <b className={"center_block"}>
                        {tab_text}
                    </b>
                </div>
            </Link>
        )
    )
}