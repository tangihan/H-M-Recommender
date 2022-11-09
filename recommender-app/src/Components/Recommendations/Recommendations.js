import React from "react";

import { Box, Typography, Button, Grid} from "@mui/material";
import { HiArrowRight } from "react-icons/hi";
import _ from "lodash";

import ItemCard from "../../Components/ItemCard/ItemCard";

const Recommendations = (props) => {

    const data = props.data;

    const tryRequire = (path) => {
        try {
         return require(`../../Images/${path}.jpg`);
        } catch (err) {
         return null;
        }
      };

    var itemList = [];
    let count = 0;
    _.map(Object.keys(data), (key) => {
        if (count === 5) {
            return 
        }
        const item = data[key];
        const imagePath = `${props.type}/0${item["articleId"]}`;
        if (tryRequire(imagePath)) {
            itemList.push(
                <Grid 
                    item 
                    xs={2.25}
                    key={item["articleId"]}
                >
                    <ItemCard
                        key={item["articleId"]}
                        id = {item["articleId"]}
                        name = {item["articleId"]}
                        imagePath = {imagePath}
                        itemName = {item["productName"]}
                        itemPrice = {item["price"]}
                    />
                </Grid>
            )
            count += 1;
        } 
    })
    
    return(
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            padding="20px 40px"

        >
            <Typography 
                fontWeight="bold"
                fontSize="20px"
                marginBottom="10px"
            >
                {props.heading}
            </Typography>
            <Grid container spacing={1}>
                {itemList}
                <Grid 
                    item 
                    display="flex"
                    alignContent="center"
                >
                    <Button><HiArrowRight color="#5C5C5C"/></Button>
                </Grid>
            </Grid>
            
        </Box> 
    )
}





export default Recommendations;