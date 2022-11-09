import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography, FormControl, TextField, MenuItem, Button } from "@mui/material";
import { HiOutlineShoppingBag } from "react-icons/hi";

import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import Recommendations from "../../Components/Recommendations/Recommendations";
// import { getRecommendationByProperty, getRecommendationByProduct, getRecommendationByProductColdStart, getRecommendationByGeneration } from "../../API/api";
import { getRecommendationByProduct, getRecommendationByProductColdStart, getRecommendationByGeneration } from "../../API/api";
import { AccountContext } from "../../Contexts/AccountContext";


const ItemDetails = () => {

    const { itemData } = useLocation().state; 
    const { accountType, seasonType } = useContext(AccountContext);

    const [propertyData, setPropertyData] = useState();
    const [productData, setProductData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRecommendation();
    }, []);

    const fetchRecommendation = async () => {
        let productResponse;
        let propertyResponse;
        try {
            if (accountType === "Account") {
                productResponse = await getRecommendationByProductColdStart(itemData["itemName"]);
            } else {
                productResponse = await getRecommendationByProduct(itemData["id"], accountType);
                if (Object.keys(productResponse).length === 0) {
                    productResponse = await getRecommendationByGeneration(accountType, seasonType);
                }
            }
            // const propertyResponse = await getRecommendationByProperty(itemData["id"]);
            // setPropertyData(propertyResponse.data);
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
                    src={require(`../../Images/Items/${itemData["imagePath"]}.jpg`)}
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
                        ${Math.round((itemData["itemPrice"] + Number.EPSILON) * 100) / 100}
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
                    heading="Others also bought"
                    data = {productData}
                    type="Product"
                />
                {/* <Recommendations 
                    heading="You may be interested in"
                    data = {propertyData}
                    type="Property"
                /> */}
                </>                
            }

        



        </div> 
    )
}

export default ItemDetails;
