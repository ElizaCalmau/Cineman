// import { useDispatch } from "react-redux";
// import { useMoviesSelector } from "../store/MoviesSlice/MoviesSlice";
// import { useEffect } from "react";

export const Movies = () => {

    // const movies = useMoviesSelector();
    // useEffect(()=>{
    //     dispatch(fetchMovies())
    // }, [dispatch])
    // console.log(movies)
    return(<div>{Object.entries(([key,value]) => {
        return <p key={key}> {key} : {value} </p>
    })}</div>)
}