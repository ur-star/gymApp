import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercies from '../components/SearchExercies';
import Exercies from '../components/Exercies';

const Home = () => {
  const [bodyPart , setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercies 
        setExercises={setExercises}
        bodyPart = {bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercies
        setExercises={setExercises}
        bodyPart = {bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home