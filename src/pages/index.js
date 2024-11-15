// Use API - [GET] https://dummyapi.online/api/movies

import { useEffect, useState } from "react";

import Movie from "./movie";
import Footer from "./Footer"

export default function Home() {

  const [movieData, setMovieData] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const handleCheckbox = (id) => {
    const idsArray = [...selectedMovies];

    if (idsArray.includes(id)) {
      const idIndex = idsArray.indexOf(id)
      idsArray.splice(idIndex, 1);
    } else {
      idsArray.push(id);
    }

    setSelectedMovies(idsArray);
  }

  useEffect(() => {
    async function fetchMovieData() {
      const response = await fetch("https://dummyapi.online/api/movies");
      const result = await response.json()
      setMovieData(result);
    }
    fetchMovieData()
  }, [])



  return (

    <div>
      <Footer selectedMovies={selectedMovies} />
      {movieData.length !== 0 ?
        movieData.map((movie) => (
          <Movie key={movie.id} movie={movie} selectedMovies={selectedMovies} handleCheckbox={handleCheckbox} />
        ))
        :
        <span className="text-xl">LOADING</span>
      }
    </div>

  );
}
