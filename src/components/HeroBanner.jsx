import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "121px", xs: "70px" },
        ml: { sm: "50", xs: "10" },
      }}
      position="relative"
      p="26px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        color="#AC5647"
        fontWeight={700}
        sx={{ fontSize: { lg: "3rem", xs: "2.5rem" } }}
        mb="1.3rem"
        mt="1.5px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight="2.7rem" mb={4}>
        Checkout more overhere
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ backgroundColor: "#ff2526", padding: "12px" }}
      >
        Explore Exercies
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
