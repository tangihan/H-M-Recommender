import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import { Link, Grid } from "@mui/material";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";
import _ from "lodash";

import "./Header.css";

const Header = () => {

    const linkList = ["Customer Service", "Newsletter", "Find a store"];
    var links = [];
    _.forEach(linkList, aLink => {
        links.push(
                <Link 
                    style={{ textTransform: "none", color: "#000000", padding: "0px 10px" }}
                    underline="hover"
                    component="button"
                    key={aLink}
                > 
                    {aLink}
                </Link>
        );
    })
    
    return(
        <div>
            <Grid 
                container  
                alignItems="center"
                justifyContent="space-between"
                padding="5px 20px 0px 5px"
            >   
                <Grid item xs={4}>
                    {links}
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
                        > 
                            <VscAccount size={18} />&nbsp;&nbsp;UserName
                        </Link>
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