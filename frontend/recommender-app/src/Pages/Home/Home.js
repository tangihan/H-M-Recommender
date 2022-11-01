import React from "react";

import { Box} from "@mui/material";
import Recommendations from "../../Components/Recommendations/Recommendations";

const Home = () => {
    return(
        <Box
            display="flex"
            justifyContent="center"
            paddingTop="10px"
            flexDirection="column"
        >    
            <Box
                display="flex"
                justifyContent="center"
            >
                <img
                    src={require("../../Images/New Arrivals.jpg")}
                    alt="logo"
                    width="60%"
                />
            </Box>
            
            <Recommendations 
                heading="Popular Picks"
                data="./popularItemMockData.json"
            />
        </Box> 
    )
}

export default Home;