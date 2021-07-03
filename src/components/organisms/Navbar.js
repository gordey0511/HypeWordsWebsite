import React, {useEffect} from "react";
import {NAVBAR_TITLE} from "../../utils/constants";
import {Link} from "react-router-dom";
import './organisms.css'
import '../../styles/img.css'
import '../../styles/blocks.css'
import {connect} from "react-redux";
import {TabNavbar} from "../atoms/TabNavbar";
import {TabNavbarMain} from "../atoms/TabNavbarMain";

const Navbar = ({current_text}) => {

    useEffect(() => {
    },[current_text])

    return(
        <div className={"main_div"}>
            {/*<Link to={"/"} className={"invested_div"}>*/}
            {/*    <div className={"outer_block"}>*/}
            {/*        <img src="logo.png" className={"img_logo"}/>*/}
            {/*        <b className={"center_block"}>*/}
            {/*            {NAVBAR_TITLE.Home}*/}
            {/*        </b>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            <TabNavbarMain
                tab_text={NAVBAR_TITLE.Home}
                current_text={current_text}
                link={"/"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Books}
                current_text={current_text}
                link={"/books"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Authors}
                current_text={current_text}
                link={"/authors"}
            />
            <TabNavbar
                tab_text={NAVBAR_TITLE.Analyze}
                current_text={current_text}
                link={"/analyze"}
            />
            {/*<Link className={'invested_div'} to={"/authors"}>*/}
            {/*    <div>*/}
            {/*        {NAVBAR_TITLE.Authors}*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link className={'invested_div'} to={"/analyze"}>*/}
            {/*    <div>*/}
            {/*        {NAVBAR_TITLE.Analyze}*/}
            {/*    </div>*/}
            {/*</Link>*/}
        </div>
    )
}


const putStateToProps = (state) => {
    return {
        current_text: state.navbar.current_text,
    }
}


export default connect(putStateToProps,null)(Navbar);