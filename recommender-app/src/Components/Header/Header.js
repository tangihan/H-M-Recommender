import React, { useState, useContext } from "react";
import { Link as LinkRouter } from "react-router-dom";

import { Link, Grid, Box, Menu, MenuItem } from "@mui/material";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";
import _ from "lodash";

import "./Header.css";
import { AccountContext } from "../../Contexts/AccountContext";

const Header = () => {

    const linkList = ["Customer Service", "Newsletter", "Find a store"];
    
    const { accountType, setAccountType } = useContext(AccountContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = (event) => {
        if (event.target.id === "Account" || event.target.id === "Teenagers" || event.target.id === "Working Adults") {
            setAccountType(event.target.id)
        }
        setAnchorEl(null);
      };
    
    return(
        <div id="header">
        <Grid 
            container  
            alignItems="center"
            justifyContent="space-between"
            padding="10px 30px 0px 30px"
        >   
            <Grid item xs={4}>
                { _.map(linkList, aLink => {
                        return( 
                        <Link 
                            style={{ textTransform: "none", color: "#000000", padding: "0px 10px" }}
                            underline="hover"
                            component="button"
                            key={aLink}
                        > 
                            {aLink}
                        </Link>
                            )
                        } 
                    )
                }
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center">
                <LinkRouter to="/">
                    <img
                        src={require("../../Images/hm logo.png")}
                        alt="logo"
                        height="85px"
                    />
                </LinkRouter>
            </Grid>
            <Grid item xs={4} display="flex" flexDirection="row" justifyContent="flex-end"> 
                    <Link 
                        className="headerButton"
                        underline="none"
                        component="button"
                        color="#000000"
                        onClick={handleClick}
                    > 
                        <VscAccount size={18} />&nbsp;&nbsp;{accountType}
                    </Link>
                    <Menu
                        id="userMenu"
                        sx={{marginTop:"5px"}}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'userMenu',
                        }}
                    >
                        <MenuItem sx={{fontSize:"12px"}} id="Account" onClick={handleClose}>Account</MenuItem>
                        <MenuItem sx={{fontSize:"12px"}} id="Teenagers" onClick={handleClose}>Teenagers</MenuItem>
                        <MenuItem sx={{fontSize:"12px"}} id="Working Adults" onClick={handleClose}>Working Adults</MenuItem>
                    </Menu>
                    <Box width="10%"/>
                    <Link 
                        className="headerButton"
                        underline="none"
                        component="button"
                        color="#000000"
                    > 
                        <HiOutlineShoppingBag size={18}/>&nbsp;&nbsp;Shopping bag
                    </Link>                    
            </Grid>
        </Grid>
        </div>
    )
}

export default Header;