import React from "react";
import { Button, Stack, Typography } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetails }) => {
  // console.log(exerciseDetails);
  const { bodyPart, name, gifUrl, equipment, target } = exerciseDetails;
  const { instructions } = exerciseDetails;
  console.log(instructions);

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        style={{
          background: "transparent",
          width: "80%", // Adjust the percentage as needed
          maxWidth: "600px", // Set a maximum width if desired
          height: "auto",
        }} // Maintain aspect ratio
      />
      <Stack sx={{ gap: { lg: "30px", xs: "20px" } }} textAlign="center">
        <Typography
          sx={{ fontSize: { lg: "40px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="brown"
          fontWeight="bold"
        >
          {name} Exercise is good for your
          <span> {target} muscles.</span>
          It will help you to gain strength and flexibility.
        </Typography>
        {extraDetails.map((item) => (
          <Stack direction="row" key={item.name} gap="10px">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              mt="18px"
              ml="20px"
              sx={{ fontSize: { lg: "22px", xs: "18px" } }}
              fontWeight={700}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Stack>
          <Typography
            variant="h5"
            fontWeight="bold"
            textTransform="capitalize"
            mb="10px"
          >
            Follow the instructions to perform {name} smoothly
          </Typography>
          {instructions?.map((instruction, index) => (
            <Typography
              key={index}
              sx={{ fontSize: { lg: "20px", xs: "16px" } }}
              mb="10px"
              fontWeight={500}
            >
              {index + 1}. {instruction}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
