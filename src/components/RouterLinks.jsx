import { Routes, Route, BrowserRouter, useParams } from "react-router-dom"
import AllMovies from "../pages/AllMovies";
import Detail from "../pages/MovieDetail";

import Error from "../pages/Error";



function RouterLinks(){

    return(
    <BrowserRouter>
        <Routes>
                <Route
                path='/movies'
                element={<AllMovies/>}
                />
                <Route
                path={`/movie/:id`}
                element={<Detail />}
                />  
                <Route
                path='*'
                element={<Error/>}
                />
        </Routes>
    </BrowserRouter>
    )
}

export default RouterLinks;