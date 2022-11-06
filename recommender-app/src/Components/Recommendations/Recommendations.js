import React from "react";

import { Box, Typography, Button, Grid} from "@mui/material";
import { HiArrowRight } from "react-icons/hi";
import _ from "lodash";

import ItemCard from "../../Components/ItemCard/ItemCard";

const Recommendations = (props) => {

    var itemList = [];
    let count = 0
    const data = props.data;
    
    _.map(Object.keys(data), (key) => {
            if (count === 5) {
                return;
            }
            const item = data[key];
            itemList.push(
                <Grid 
                    item 
                    xs={2.25}
                    key={item["articleId"]}
                >
                    <ItemCard
                        id = {item["articleId"]}
                        name = {item["articleId"]}
                        imagePath = {`${props.type}/${item["articleId"]}`}
                        itemName = {item["productName"]}
                        itemPrice = {props.type === "Popular" ? item["a.maxPrice"] : item["price"]}
                    />
                </Grid>
            )
            count += 1;
        }
    )

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