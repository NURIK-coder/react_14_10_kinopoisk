import { useEffect } from "react";
import MovieCard from "../components/movieCard";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import { loadMovieDetail } from "../store/movieDetailAction";
import '../App.css'

function Detail(){
    const {id} = useParams();
    const movie = useSelector((state)=>state.movieInfo.movie)   
    useEffect(()=>{
        store.dispatch(loadMovieDetail(id))
    }, [])
    return(
        <div className="movie_detail">
            <img className='poster' src={movie.posterUrl} alt="" />
            <div className="movie_d" >
                <h1>Название фильма : {movie.nameOriginal ? movie.nameOriginal : movie.nameRu}</h1>
                <h2>Страна: {movie.countries?.map((e) => (<p>{e.country}</p>))}</h2>
                <a className="link" href=""><Link to={'/movies'}>На главную</Link></a>
            </div>
            
        </div>
    )
}
export default Detail;
