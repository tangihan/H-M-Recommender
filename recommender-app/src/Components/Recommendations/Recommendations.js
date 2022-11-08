import React from "react";

import { Box, Typography, Button, Grid} from "@mui/material";
import { HiArrowRight } from "react-icons/hi";
import _ from "lodash";

import ItemCard from "../../Components/ItemCard/ItemCard";

const Recommendations = (props) => {

    const data = props.data;
    
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
                { _.map(_.take(data, 5), (item, key) => {
                    return (
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
                                itemPrice = {item["price"]}
                            />
                        </Grid>
                        )
                    }
                )}
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