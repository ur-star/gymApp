export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  }
};


export const fetchData =  async (url, options)=>
{
    const response = await fetch (url, options)
    const data  = await response.json();
    // console.table(process.env);

    return data;
}
