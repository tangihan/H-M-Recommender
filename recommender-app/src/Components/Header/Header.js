import React, { useContext } from "react";
import { Link as LinkRouter } from "react-router-dom";

import { Link, Grid, FormControl, MenuItem, Select } from "@mui/material";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineCalendar }  from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import _ from "lodash";

import "./Header.css";
import { AccountContext } from "../../Contexts/AccountContext";

const Header = () => {

    const linkList = ["Customer Service", "Newsletter", "Find a store"];
    
    const { accountType, setAccountType } = useContext(AccountContext);
    const { seasonType, setSeasonType } = useContext(AccountContext);

    return(
        <div id="header">
        <Grid 
            container  
            alignItems="center"
            justifyContent="space-between"
            padding="10px 20px 0px 20px"
        >   
            <Grid item xs={5}>
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
            <Grid item display="flex" justifyContent="center">
                <LinkRouter to="/">
                    <img
                        src={require("../../Images/hm logo.png")}
                        alt="logo"
                        height="85px"
                    />
                </LinkRouter>
            </Grid>
            <Grid item xs={5} display="flex" flexDirection="row" justifyContent="flex-end"> 
                    <div id="seasons">
                        <AiOutlineCalendar size={18} />&nbsp;&nbsp;
                        <FormControl variant="standard" style={{ width: "100px", marginRight: "15px"}}>
                        <Select
                            id="seasonMenu"
                            onChange={(event) => setSeasonType(event.target.value)}
                            value={seasonType}
                            sx={{fontSize:"13.3333px"}}
                            disableUnderline
                        >
                            <MenuItem 
                                sx={{fontSize:"12px"}} 
                                id="Winter" 
                                value="Winter"
                            >Winter
                            </MenuItem>
                            <MenuItem 
                                sx={{fontSize:"12px"}} 
                                id="Summer" 
                                value="Summer"
                            > Summer
                            </MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div id="users">
                        <VscAccount size={18} />&nbsp;&nbsp;
                        <FormControl variant="standard" style={{ width:"130px", marginRight:"10px"}}>
                        <Select
                            id="accountMenu"
                            onChange={(event) => setAccountType(event.target.value)}
                            value={accountType}
                            sx={{fontSize:"13.3333px"}}
                            disableUnderline
                        >
                            <MenuItem 
                                sx={{fontSize:"12px"}} 
                                id="Account" 
                                value="Account"
                            >Account
                            </MenuItem>
                            <MenuItem 
                                sx={{fontSize:"12px"}} 
                                id="Teenagers" 
                                value="Teenagers"
                            >Teenagers
                            </MenuItem>
                            <MenuItem  
                                sx={{fontSize:"12px"}} 
                                id="Working Adults" 
                                value="Working Adults"
                            >Working Adults
                            </MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div id="shopping">
                        <Link 
                            className="headerButton"
                            underline="none"
                            component="button"
                            color="#000000"
                        > 
                            <HiOutlineShoppingBag size={18}/>&nbsp;&nbsp;Shopping bag
                        </Link>  
                    </div>
                                     
            </Grid>
        </Grid>
        </div>
    )
}

export default Header;