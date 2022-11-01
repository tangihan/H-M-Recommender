import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

import "./ItemCard.css";

const ItemCard = (props) => {

    // const navigate = useNavigate();
    // const handleOnClick = (event) => {
    //     navigate(`/item=?${event.target.name}`, {
    //         state: {
    //             categories: event.target.name
    //         }
    //     })
    // }

    return(
        <Card sx={{background: "#E3E3E3"}}>
            <CardActionArea
                name={props.name}
                // onClick={handleOnClick}
            >
                <CardContent>
                    <CardMedia
                        component="img"
                        height="240"
                        image={require(`../../Images/${props.imagePath}`)}
                        sx={{objectFit: "contain"}}
                    />
                    <Typography paddingTop="16px">{props.itemName}</Typography>
                    <Typography>${props.itemPrice}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>  
    )
}

export default ItemCard;