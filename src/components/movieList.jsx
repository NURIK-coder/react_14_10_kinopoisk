import { useSelector } from "react-redux";
import { loadMovies } from "../store/movieAction";
import { useEffect } from "react";
import { store } from "../store/store";
import MovieCard from "./movieCard";
import '../App.css'

function MovieList(){
    const movies = useSelector((state)=>state.movieInfo.movies);
    useEffect(()=>{
        store.dispatch(loadMovies())
      }, [])
    return (
        <>
        <h1>Movies list</h1>
            <div className="movie_list">
                {movies.map((movie, ind)=><MovieCard movie={movie} key={ind}/>)}
            </div>
        </>
    )
}
export default MovieList;