import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { fetchData, options, fetchYtData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [similarEquipment, setSimilarEqipment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("ID", id);
    const fetchExercisesData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exercisesData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`
      );
      setExerciseDetails(exercisesData);

      const youtubeData = await fetchYtData(
        `${youTubeUrl}/search?query=${exercisesData.name}`
      );
      setExerciseVideos(youtubeData.contents);
      //  console.log(exerciseDetails);

      const similarMuscleData = await fetchData(
        `${exerciseUrl}/exercises/target/${exercisesData.target}`
      );
      setSimilarExercises(similarMuscleData);

      const similarEquipmentData = await fetchData(
        `${exerciseUrl}/exercises/equipment/${exercisesData.equipment}`
      );
      setSimilarEqipment(similarEquipmentData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        similarExercises={similarExercises}
        similarEquipment={similarEquipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
