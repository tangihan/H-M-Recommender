import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

import "./ItemCard.css";

const ItemCard = (props) => {

    const navigate = useNavigate();
    const handleOnClick = (event) => {
        navigate(`/item/${event.target.id}`, {
            state: {
                itemData: props                
            }
        })
    }
 
    return(
        <Card sx={{background: "#EBEAE8"}}>
            <CardActionArea
                onClick={handleOnClick}
            >
                <CardContent sx={{height:"360px"}}>
                    <CardMedia
                        id={props.id}
                        component="img"
                        height="240"
                        image={require(`../../Images/${props.imagePath}.jpg`)}
                        sx={{objectFit: "contain"}}
                        title= {props.itemName}
                    />
                    <Typography 
                        paddingTop="16px" 
                        id={props.id} 
                        title= {props.itemName}
                        fontWeight="bold"
                    >
                        {props.itemName.toUpperCase()}
                    </Typography>
                    <Typography 
                        id={props.id} 
                        title= {props.itemName}
                    >
                        ${props.itemPrice === null ? 50.25 
                            : Math.round((props.itemPrice + Number.EPSILON) * 100) / 100
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>  
    )
}

export default ItemCard;