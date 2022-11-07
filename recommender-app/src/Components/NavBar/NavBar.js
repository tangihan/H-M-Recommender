import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Box } from "@mui/material";
import _ from "lodash";


const NavBar = () => {

    const navigate = useNavigate();
    const handleOnClick = (event) => {
        navigate(`/${event.target.name}`, {
            state: {
                categories: event.target.name
            }
        })
    }

    const catList = ["Ladies", "Divided", "Men", "Baby", "Kids", "Sport", "MAGAZINE", "Sustainability"];

    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            { _.map(catList, cat => {
                    return( 
                    <Button
                        name={cat}
                        style={{ textTransform: "none", color: "#000000", padding: "10px 20px" }}
                        key={cat}
                        onClick= {cat === "Ladies" || cat === "Men" ? handleOnClick : null}
                    >
                        {cat}
                    </Button>
                        )
                    } 
                )
            }
        </Box>
    )
}

export default NavBar;