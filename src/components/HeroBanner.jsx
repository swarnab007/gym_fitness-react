import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import HeroBannerImg from "../assets/images/HeroBanner.avif";

const HeroBanner = () => {
  return (
    <Grid container>
      {/* Typography components */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
          position="relative"
          p="20px"
        >
          <Typography fontSize="24px" color="#FF2625" fontWeight="600">
            Start Exercises
          </Typography>
          <Typography
            fontWeight="700"
            mt="15px"
            mb="10px"
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          >
            No Pain, No Gain
          </Typography>
          <Typography
            fontSize="22px"
            color="blueviolet"
            fontFamily="Alegreya"
            lineHeight="35px"
          >
            Check out the most effective exercises personalized to you
          </Typography>
          <Stack>
            <a
              href="#exercises"
              style={{
                marginTop: "40px",
                textDecoration: "none",
                width: "200px",
                textAlign: "center",
                background: "#e12d2d",
                padding: "10px",
                fontSize: "22px",
                textTransform: "none",
                color: "white",
                borderRadius: "4px",
              }}
            >
              check exercises
            </a>
          </Stack>
          <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
              opacity: "0.1",
              display: { lg: "block", xs: "none" },
              fontSize: "200px", mt: "25px"
            }}
          >
            Workout
          </Typography>
        </Box>
      </Grid>

      {/* Image component */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            textAlign: "center",
            margin: { xs: "0", md: "0 20px" },
            display: { lg: "block", xs: "none" },
          }}
          my="20px"
        >
          <img src={HeroBannerImg} alt="Hero Banner" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
