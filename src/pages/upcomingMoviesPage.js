import React, { useState, useEffect, useContext } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import { MoviesContext } from "../contexts/moviesContext";
const UpcomingMoviePage = () => {
  // const [upcomingMovies, setUpcoming] = useState([]);
  // useEffect(() => {
  //   getUpcomingMovies().then(upcomingMovies => {
  //     setUpcoming(upcomingMovies);
  //   });
  // }, [])
  const context = useContext(MoviesContext);
  const upcomingMovies = context.upcoming;

  return (
    <PageTemplate 
      title='No. Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} /> 
      }}
    />
  );
};

export default UpcomingMoviePage;