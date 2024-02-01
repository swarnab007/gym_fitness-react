import React from "react";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ exerciseDetails }) => {
  // console.log(exerciseDetails);
  const { bodyPart, name, gifUrl, equipment, target } = exerciseDetails;
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} />
    </Stack>
  );
};

export default Detail;
