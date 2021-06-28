import React from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link} from "react-router-dom";
import './test.css'

export const Navbar = () => {

    return(
        <div className={"main_div"}>
            <Link to={"/"} className={"invested_div"}>
                <div>
                    <b>
                        {NAVBAR_TITLE.Home}
                    </b>
                </div>
            </Link>
            <Link className={'invested_div'} to={"/books"}>
                <div>
                    {NAVBAR_TITLE.Books}
                </div>
            </Link>
            <Link className={'invested_div'} to={"/authors"}>
                <div>
                    {NAVBAR_TITLE.Authors}
                </div>
            </Link>
            <Link className={'invested_div'} to={"/analyze"}>
                <div>
                    {NAVBAR_TITLE.Analyze}
                </div>
            </Link>
        </div>
    )
}