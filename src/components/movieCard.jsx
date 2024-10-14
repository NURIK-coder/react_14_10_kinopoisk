import '../App.css';
import {Link, useNavigate} from 'react-router-dom';
function MovieCard({movie}){
    const navigate = useNavigate();
    return(
        <div className="movie_card" onClick={() => {navigate(`/movie/${movie.kinopoiskId}`)}}>
            <img className='posters' src={movie.posterUrl} alt="" />
            <h1>{movie.nameOriginal?movie.nameOriginal: movie.nameRu}</h1>
            <h2>Country:{movie.countries.map((e) => (<p>{e.country}</p>))}</h2>
        </div>
    )
}
export default MovieCard;