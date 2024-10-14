import { useParams } from "react-router-dom";

const URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'

export const loadMovieDetail = (id) =>{
    return async (dispatch)=>{
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: 'GET',
            headers:{
                'X-API-KEY': '52b8a395-fce0-4b77-a3bb-669506ac9b36',
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json()
        dispatch({type: 'SET_MOVIE', payload: data})
    }
}
