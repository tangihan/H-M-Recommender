import React from "react";

import { Box, Typography, Button, Grid} from "@mui/material";

import { AiOutlineArrowRight } from "react-icons/ai";
import _ from "lodash";
import ItemCard from "../../Components/ItemCard/ItemCard";

const Recommendations = (props) => {

    var itemList = [];
    const data = require(`${props.data}`);
    _.map(Object.keys(data), (key) => {
            const item = data[key];
            itemList.push(
                <Grid 
                    item 
                    xs={2.25}
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
        }
    )

    return(
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            padding="40px"

        >
            <Typography
                fontWeight="bold"
                fontSize="20px"
                marginBottom={1.5}
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
                    <Button><AiOutlineArrowRight color="#5C5C5C"/></Button>
                </Grid>
            </Grid>
            
        </Box> 
    )
}

export default Recommendations;