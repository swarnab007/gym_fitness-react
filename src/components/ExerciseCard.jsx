import React from "react";
import { Button, Typography, Stack, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
        <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 1, lg: 2 }} mt={{ xs: 2, lg: 3 }}>
          <Button
            sx={{
              color: "#000",
              width: "100%",
              height: "fit-content",
              background: "#FFA9A9",
              fontSize: { xs: "14px", lg: "18px" },
              borderRadius: "20px",
              textTransform: "capitalize",
              // Remove underline
              textDecoration: "none",
              "&:hover": {
                background: "#FF7575", // Change background color on hover
              },
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              color: "#000",
              width: "100%",
              height: "fit-content",
              mt: { xs: 2, lg: 0 },
              background: "#FCC757",
              fontSize: { xs: "14px", lg: "18px" },
              borderRadius: "20px",
              textTransform: "capitalize",
              // Remove underline
              textDecoration: "none",
              "&:hover": {
                background: "#E6A80D", // Change background color on hover
              },
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          color="#000"
          fontWeight="bold"
          borderBottom="2px solid red"
          mb="20px"
          sx={{
            fontSize: { xs: "18px", lg: "24px" },
            // Remove underline
            textDecoration: "none",
            "&:hover": {
              color: "#E65C00", // Change text color on hover
            },
          }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
          wordWrap="break-word"
        >
          {exercise.name}
        </Typography>
      </Link>
    </Grid>
  );
};

export default ExerciseCard;
