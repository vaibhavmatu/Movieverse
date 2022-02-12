import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
 
  const dispatch = useDispatch()
  const movieText = "Harry"
  const showText = "Friends"
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  },[dispatch])
  return (
  <div>
    <div className='banner-img'></div>
    <MovieListing />
  </div>
  )
}
