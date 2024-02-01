import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { fetchData, options } from "../utils/fetchData";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises"
        );
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`)
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "80px", xs: "50px" } }} p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={{ lg: "46px", xs: "20px" }}
      >
        Loading Results ....
      </Typography>
      <Stack direction={{ lg: "row", xs: "column" }} spacing={4}>
        {currentExercises.map((exercise, index) => (
          <Link  key={index} to={`/exercise/${exercise.id}`}> 
          <ExerciseCard exercise={exercise} />
          </Link>
        ))}
      </Stack>
      {exercises.length > 9 && (
        <Pagination
          color="primary"
          count={Math.ceil(exercises.length / exercisesPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={paginate}
          size="large"
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        />
      )}
    </Box>
  );
};

export default Exercises;
