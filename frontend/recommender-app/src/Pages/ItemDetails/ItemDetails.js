import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography, FormControl, TextField, MenuItem, Button } from "@mui/material";
import { HiOutlineShoppingBag } from "react-icons/hi";

import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import Recommendations from "../../Components/Recommendations/Recommendations";

const ItemDetails = () => {

    const itemData = {
                        "itemName": "Dark Grey Vest", 
                        "itemPrice": 50, 
                        "path": "Items/0341242019.jpg"
                     }
    const { itemId } = useLocation().state; // for querying api


    return(
        <div>
            <BreadCrumbs />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="25px"
                flexDirection="row"
            >
                <img 
                    src={require(`../../Images/${itemData["path"]}`)}
                    alt={itemData["itemName"]}
                    width="25%"
                />
                <Box 
                    display="flex"
                    justifyContent="space-evenly"
                    padding="40px"
                    flexDirection="column"
                    width="30%"
                >
                    <Typography fontWeight="bold">
                        {itemData["itemName"]}
                    </Typography>
                    <Typography 
                        paddingBottom="75px"
                        fontSize="18px"
                    >
                        ${itemData["itemPrice"]}
                    </Typography>
                    <FormControl>
                    <TextField
                        style={{ width: "100%"}}
                        label="Select size" 
                        inputProps={{ 
                            name: 'select Size',
                            id: 'size',
                        }}
                        select
                    >
                        <MenuItem value='day'>XS</MenuItem>
                        <MenuItem value='week'>S</MenuItem>
                        <MenuItem value='month'>M</MenuItem>
                        <MenuItem value='day'>L</MenuItem>
                        <MenuItem value='week'>XL</MenuItem>
                    </TextField>
                    </FormControl>
                    <Button 
                        style={{
                                    backgroundColor:"#000000", 
                                    color:"#FFFFFF", 
                                    padding: "20px 0px",
                                    margin: "20px 0px",
                                    width:"100%"
                                }}
                    >
                        <HiOutlineShoppingBag size={18}/>&nbsp;&nbsp;Add
                    </Button>
                </Box> 
            </Box>

            <Recommendations 
                heading="You may be interested in"
                data="./popularItemMockData.json"
            />

            <Recommendations 
                heading="Others also bought"
                data="./popularItemMockData.json"
            />
        </div> 
    )
}

export default ItemDetails;
