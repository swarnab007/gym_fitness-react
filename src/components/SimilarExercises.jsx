import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  return (
    <Box
      sx={{ mt: { lg: "80px", xs: "0px" }, ml: "20px" }}
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "30px", xs: "20px" } }}
        color="#000"
        fontWeight="700" mb="30px"
      >
        Exercises that target{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          similar Muscle Groups
        </span>
      </Typography>
      <Stack direction="row" sx={{p: "2", position: "relative"}}>
        {similarExercises.length > 0 ? <HorizontalScrollbar data={similarExercises} /> : <Loader />}
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "30px", xs: "20px" } }}
        color="#000"
        fontWeight="700" mb="30px"
      >
        Exercises with {" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          same equipment
        </span>
      </Typography>
      <Stack direction="row" sx={{p: "2", position: "relative"}}>
        {similarExercises.length > 0 ? <HorizontalScrollbar data={similarEquipment} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
