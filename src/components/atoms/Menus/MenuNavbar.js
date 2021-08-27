import React from "react";
import {Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const MenuNavbar = ({
    handleClose,
    openMenu,
    arrayButtons
                           }) => {
    return (
        <div>
            <Menu
                id="simple-menu"
                anchorEl={openMenu}
                keepMounted
                open={Boolean(openMenu)}
                onClose={handleClose}
            >

                {
                    arrayButtons.map(({
                                          text,
                                          link,
                                          icon,
                                      }) => (
                        <Link
                            style={{
                                textDecoration: 'none',
                                fontSize: 22,
                                color:"#323223"
                            }}
                            to={link}>
                        <MenuItem
                            onClick={handleClose}
                            style={{
                                margin: 5,
                            }}
                        >
                            {icon}
                            <div style={{
                                marginLeft: 20,
                                fontWeight: 600,
                                fontSize: 18,
                            }}>
                                {text}
                            </div>
                        </MenuItem>
                            </Link>
                    ))
                }
            </Menu>
        </div>
    )
}