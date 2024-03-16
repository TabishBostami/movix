import axois from "axios";
const BASE_URL = "https://api.themoviedb.org/3" ;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTdkOTFiZjgxY2UyYmUxMzY3NmFjOWVlYzc0MzVjYiIsInN1YiI6IjY1ZWMxZWI2YjdkMzUyMDE2MmU1MmNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO0VWWm5BJ-6R6BlxG4psKgXM1GSjxhqFSjVSS-zl_o";

const headers = {
 
  Authorization: "Bearer " + TMDB_TOKEN,
  
  
};

export const  fetchDataFromApi = async(url,params) => {
   try{
    const {data} = await axois.get(BASE_URL + url,{headers,params})
    return data;

   }
    catch (err){
    console.log(err);
    return err;

   }
}