import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Grid, Typography, Box, Button} from "@mui/material";
import _, { set } from "lodash";
import { IoIosArrowDown } from "react-icons/io";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { getStoreCatalog } from "../../API/api";
import { AccountContext } from "../../Contexts/AccountContext";

const Items = () => {

    const { categories } = useLocation().state;
    const { setLocation } = useContext(AccountContext);
    setLocation(categories);

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchStoreCatalog();
    }, [categories]);

    console.log(categories);
    console.log(isLoading);

    const fetchStoreCatalog = async () => {
        try {
            const response = await getStoreCatalog(categories)
            setData(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e)
        }
    }
    
    var itemList = [];
    if (isLoading) {
        itemList.push(
            <Box 
                key="empty"
                height="100px"    
            />  
        )
    } else {
        _.forEach(data, (item) => {
            itemList.push(
                <Grid 
                    item 
                    xs={2.4}
                    key={item["articleId"]}
                >
                    <ItemCard
                        id = {item["articleId"]}
                        name = {item["articleId"]}
                        imagePath = {`${categories}/0${item["articleId"]}`}
                        itemName = {item["productName"]}
                        itemPrice = {item["price"]}
                    />
                </Grid>
               
            )
        }) 
    }
    
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
                        alignitems="center"
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
