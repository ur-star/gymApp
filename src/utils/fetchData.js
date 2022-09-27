export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'8685b3b55bmsh527fd8bd3c74a1cp1878abjsnc7933c7697e2',
  }
};


export const fetchData =  async (url, options)=>
{
    const response = await fetch (url, options)
    const data  = await response.json();
    // console.table(process.env);

    return data;
}