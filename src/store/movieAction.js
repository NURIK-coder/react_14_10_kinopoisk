const URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'

export const loadMovies = ()=>{
    return async (dispatch)=>{
        const response = await fetch(URL, {
            method: 'GET',
            headers:{
                'X-API-KEY': '52b8a395-fce0-4b77-a3bb-669506ac9b36',
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json()
        dispatch({type: 'SET_MOVIES', payload: data.items})
    }
}