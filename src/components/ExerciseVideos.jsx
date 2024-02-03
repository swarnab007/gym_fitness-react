import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // console.log(exerciseVideos);
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "33px", xs: "24px" } }}
        fontWeight="600"
        marginBottom="20px"
      >
        Tutorial Videos for{" "}
        <span
          style={{
            color: "#f5426f",
            textTransform: "capitalize",
            fontWeight: "700",
          }}
        >
          {name}
        </span>
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "20px", xs: "0px" },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="flex-start"
      >
        {exerciseVideos?.slice(0, 4).map((video, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "20px",
                width: "100%", // Make the image width responsive
              }}
              src={video.video.thumbnails[0].url}
              alt="video.channelName"
            />
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "18px" } }}
                fontWeight="600"
                marginTop="10px"
                color="#000"
              >
                {video.video.title}
              </Typography>
              <Typography fontSize="14px" marginTop="10px" color="#000">
                {video.video.channelTitle}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
