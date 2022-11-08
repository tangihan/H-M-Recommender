import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography, FormControl, TextField, MenuItem, Button } from "@mui/material";
import { HiOutlineShoppingBag } from "react-icons/hi";

import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import Recommendations from "../../Components/Recommendations/Recommendations";
import { getRecommendationByProperty } from "../../API/api";
import { getRecommendationByProduct } from "../../API/api";

const ItemDetails = () => {

    const { itemData } = useLocation().state; 

    const [propertyData, setPropertyData] = useState();
    const [productData, setProductData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRecommendation();
    }, []);

    const fetchRecommendation = async () => {
        try {
            const propertyResponse = await getRecommendationByProperty(itemData["id"]);
            const productResponse = await getRecommendationByProduct(itemData["itemName"]);
            setPropertyData(propertyResponse.data);
            setProductData(productResponse.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e)
        }

    };

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
                    src={require(`../../Images/${itemData["imagePath"]}.jpg`)}
                    alt={itemData["itemName"]}
                    width="350px"
                />
                <Box 
                    display="flex"
                    justifyContent="space-evenly"
                    padding="40px"
                    flexDirection="column"
                    width="400px"
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
                        value=''
                        style={{ width: "100%"}}
                        label="Select size" 
                        inputProps={{ 
                            name: 'select Size',
                            id: 'size',
                        }}
                        select
                    >
                        <MenuItem value='XS'>XS</MenuItem>
                        <MenuItem value='S'>S</MenuItem>
                        <MenuItem value='M'>M</MenuItem>
                        <MenuItem value='L'>L</MenuItem>
                        <MenuItem value='XL'>XL</MenuItem>
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
            
            { isLoading ?
                <Box 
                height="100px"    
                />       
                :
                <>
                <Recommendations 
                    heading="You may be interested in"
                    data = {propertyData}
                    type="Property"
                />

                <Recommendations 
                    heading="Others also bought"
                    data = {productData}
                    type="Product"
                />
                </>                
            }

        



        </div> 
    )
}

export default ItemDetails;
