import React from "react";

import { Grid } from "@mui/material";

import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import ItemCard from "../../Components/ItemCard/ItemCard";
import _ from "lodash";


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
            <Header />
            <NavBar />

            <Grid 
                container 
                id="View All Items"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                padding="4ch"
            >
                {itemList}
            </Grid>

        </div> 
    )
}

export default Items;
