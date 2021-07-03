import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AuthorAPI} from "../../services/AuthorApi";

export const TabNavbar = ({tab_text,current_text,link}) => {

    useEffect(() => {
    },[])

    return (

        ((tab_text === current_text) ?
                <Link className={'invested_div'} to={link}>
                    <div className={"red_tab_navbar"}>
                        {tab_text}
                    </div>
                </Link>
                :
                <Link className={'invested_div'} to={link}>
                    {tab_text}
                </Link>

        )
    )
}