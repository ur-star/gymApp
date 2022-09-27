import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercies = (setExercises,bodyPart,setBodyPart) => {
  const [search, setSearch] = useState("");
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all',...bodyPartsData])
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      // console.log(searchedExercises);
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt="2.1rem"
      justifyContent={"center"}
      p="1.4rem"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br></br>Should Know
      </Typography>
      <Box position="relative" mb={"72px"}>
        <TextField
          height={"72px"}
          value={search}
          placeholder="Search Exercies"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "75vw", xs: "75vw" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx ={{position:'relative' , width: '100%', p: '20px'}}>
      <HorizontalScrollbar data={bodyParts}
        bodyPart={bodyPart} setBodyPart={setBodyPart}
      />
      </Box>
    </Stack>
  );
};

export default SearchExercies;
