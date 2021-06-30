import React, {useEffect} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link} from "react-router-dom";
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import {connect} from "react-redux";

const Navbar = ({current_text}) => {

    useEffect(() => {
        console.log("NAVBAR CURRENT "+current_text)
    },[current_text])

    return(
        <div className={"main_div"}>
            <Link to={"/"} className={"invested_div"}>

                <div className={"outer_block"}>
                    <img src="logo.png" className={"img_logo"}/>
                    <b className={"center_block"}>
                        {NAVBAR_TITLE.Home}
                    </b>
                </div>
            </Link>
            <Link className={"invested_div"} to={"/books"}>
                <div className={"red_tab_navbar"}>
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


const putStateToProps = (state) => {
    return {
        current_text: state.navbar.current_text,
    }
}


export default connect(putStateToProps,null)(Navbar);