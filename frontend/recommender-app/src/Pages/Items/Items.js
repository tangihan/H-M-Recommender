import React from "react";

import { Grid, Typography, Box, Button} from "@mui/material";
import _ from "lodash";
import { IoIosArrowDown } from "react-icons/io";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import ItemCard from "../../Components/ItemCard/ItemCard";



const Items = () => {

    var itemList = [];
    const data = require("./itemMockData.json");
    _.map(Object.keys(data), (key) => {
        const item = data[key];
        itemList.push(
            <Grid 
                item 
                xs={2.4}
                key={key}
            >
                <ItemCard
                    id = {key}
                    name = {key}
                    imagePath = {item["path"]}
                    itemName = {item["itemName"]}
                    itemPrice = {item["itemPrice"]}
                />
            </Grid>
           
        )
    })    

    return(
        <div>
            <BreadCrumbs />
            <Box padding="1ch 4ch">
                <Typography 
                    fontWeight="bold"
                    fontSize="20px"
                    marginBottom="10px"
                >
                    VIEW ALL
                </Typography>
                <Box 
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                > 
                    <Box
                        display="flex"
                        flexDirection="row"
                        width="80%"
                    >
                    <Button 
                        variant="text"
                        
                        style={{color:"#000000", padding:"0px", fontSize:"12px"}}
                    >
                        SORT BY &nbsp; <IoIosArrowDown />
                    </Button>
                    <Box width="3%" />
                    <Button  
                        variant="text"
                        fontSize="12px"
                        display="flex"
                        alignItems="center"
                        style={{color:"#000000", padding:"0px", fontSize:"12px"}}
                    >
                        <TbAdjustmentsHorizontal size={15}/> &nbsp;  FILTER & SORT 
                    </Button>
                    </Box>
                    <Box>
                        <Typography fontSize="12px">10 items</Typography>
                    </Box>
                </Box>
                
               
            </Box>
          
            <Grid 
                container 
                id="View All Items"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                padding="1ch 4ch"
            >
                {itemList}
            </Grid>

        </div> 
    )
}

export default Items;
