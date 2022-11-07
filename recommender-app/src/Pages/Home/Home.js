import React, { useContext, useState, useEffect } from "react";

import { Box} from "@mui/material";

import Recommendations from "../../Components/Recommendations/Recommendations";
import { AccountContext } from "../../Contexts/AccountContext";
import { getRecommendationByProduct, getRecommendationBySeason } from "../../API/api";

const Home = () => {

    const { accountType } = useContext(AccountContext);

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchRecommendation();
    }, [accountType]);

    const fetchRecommendation = async () => {
        try {
            let response;
            if (accountType === "Account") {
                response = await getRecommendationBySeason("Winter");
            } else {
                response = await getRecommendationByProduct("200 den 1p Tights");
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