import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from 'react-router-dom';
import {fetchData,options} from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const {id} = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log("ID",id);
        const fetchExercisesData = async () => {
            const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
            // const youTubeUrl = '';
           
            const exercisesData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`);
            setExerciseDetails(exercisesData);
        }
        fetchExercisesData();
    },[id])
  return (
    <Box>
        <Detail exerciseDetails={exerciseDetails} />
        <ExerciseVideos />
        <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail;
