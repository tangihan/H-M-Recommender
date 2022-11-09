import React, { useContext, useState, useEffect } from "react";

import { Box } from "@mui/material";

import Recommendations from "../../Components/Recommendations/Recommendations";
import { AccountContext } from "../../Contexts/AccountContext";
import { getRecommendationBySeason, getRecommendationByGeneration } from "../../API/api";

const Home = () => {

    const { accountType, seasonType } = useContext(AccountContext);

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchRecommendation();
    }, [accountType, seasonType]);

    const fetchRecommendation = async () => {
        try {
            let response;
            if (accountType === "Account") {
                response = await getRecommendationBySeason(seasonType);
            } else {
                console.log(accountType);
                response = await getRecommendationByGeneration(accountType, seasonType);
                if (Object.keys(response.data).length === 0) {
                    response = await getRecommendationBySeason(seasonType);
                }
            }
            setData(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e)
        }
    };

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
            
            { isLoading ? 
                <Box 
                    height="100px"    
                />             
            : 
            <Recommendations 
                heading="Popular Picks"
                data={data}
                type="Popular"
            />
            }
            
        </Box> 
    )
}

export default Home;