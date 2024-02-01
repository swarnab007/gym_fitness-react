import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({exercises, setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // load the exercises as soon as the app loads
  useEffect(() => {
    const getExercises = async () => {
      const response = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
      );
      setBodyParts(["all", ...response]);
      // console.log(bodyParts);
    };

    getExercises();
  }, []);

  // display data on basis of search
  const handleSearch = async () => {
    if (search) {
      // console.log(search);
      const response = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`
      );
      console.log(response);

      const searchedExercises = response.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
      console.log(exercises);
    }
  };

  return (
    <Stack alignItems="center" mt="25px" justifyContent="center" p="20px">
      <Typography
        fontWeight={800}
        sx={{ fontSize: { lg: "40px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Start Your Exercises <br /> with GymLove
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              outline: "none",
            },
            width: { lg: "1100px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
