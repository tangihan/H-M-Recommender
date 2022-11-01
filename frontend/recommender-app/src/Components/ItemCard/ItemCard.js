import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

import "./ItemCard.css";

const ItemCard = (props) => {

    const navigate = useNavigate();
    const handleOnClick = (event) => {
        console.log(event)
        navigate(`/item/${event.target.id}`, {
            state: {
                itemName: event.target.title,
                itemId: event.target.id, 
            }
        })
    }
 
    return(
        <Card sx={{background: "#E3E3E3"}}>
            <CardActionArea
                onClick={handleOnClick}
            >
                <CardContent>
                    <CardMedia
                        id={props.id}
                        component="img"
                        height="240"
                        image={require(`../../Images/${props.imagePath}`)}
                        sx={{objectFit: "contain"}}
                        title= {props.itemName}
                    />
                    <Typography 
                        paddingTop="16px" 
                        id={props.id} 
                        title= {props.itemName}
                        fontWeight="bold"
                    >
                        {props.itemName}
                    </Typography>
                    <Typography 
                        id={props.id} 
                        title= {props.itemName}
                    >
                        ${props.itemPrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>  
    )
}

export default ItemCard;