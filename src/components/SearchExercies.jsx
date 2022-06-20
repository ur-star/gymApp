import React,{useEffect,useState} from 'react'
import {Box, Stack, Typography, Button,TextField} from '@mui/material';

const SearchExercies = () => {
  const [Search, setSearch] = useState('')
  const handleSearch= async () =>{
    if(Search){
      
    }
  }
  return (
   <Stack alignItems={'center'} mt='2.1rem' justifyContent={'center'} p='1.4rem'>
   <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} 
   mb="50px" textAlign={'center'}>
   Awesome Exercises You <br></br>Should Know
   </Typography>
 <Box position='relative' mb={'72px'}>
    <TextField 
      height={'72px'}
      value="Search"
      placeholder='Search Exercies'
      onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
      type='text'
      sx={{
        input:{fontWeight:'700',border:'none',borderRadius:'4px',
      },
      width:{lg:'75vw',xs:'75vw'},
      backgroundColor:'#fff',
      borderRadius:'40px',
      }}
    />
    <Button className='search-btn' sx={{backgroundColor:'#ff2625',
    color:'#fff',textTransform:'none',
    width:{lg:'175px',xs:'80px'},
    fontSize:{lg:'20px',xs:'14px'},
    height:'56px',position :'absolute',right:'0'}} onClick={handleSearch}>Search</Button>

 </Box>

   </Stack>
  )
}

export default SearchExercies