import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercies from '../components/SearchExercies';
import Exercies from '../components/Exercies';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercies/>
      <Exercies/>
    </Box>
  )
}

export default Home