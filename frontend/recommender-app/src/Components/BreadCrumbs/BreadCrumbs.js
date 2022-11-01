import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography } from "@mui/material";

const BreadCrumbs = () => {
    
    const location = useLocation().state;
    let isCategory = false;
    if ("categories" in location) {
        isCategory = true;
    }

    return(
        <Box
            display="flex"
            justifyContent="center"
            paddingTop="20px"
        >
            <Typography fontSize="14px">
                { isCategory ? `HM.com/${location["categories"]}/View All` : `HM.com/${location["itemName"]}` }
            </Typography>
        </Box> 
    )
}

export default BreadCrumbs;