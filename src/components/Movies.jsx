// import { useDispatch } from "react-redux";
import { useMoviesSelector } from "../store/MoviesSlice/MoviesSlice";
// import { useEffect } from "react";

export const Movies = () => {
    const movies = useMoviesSelector();

    return(
    <div>
        {movies && typeof movies === 'object' && Object.entries(movies).map(([key,value]) => {
            if(typeof value !== 'object'){
                return <p key={key}> {key} : {value} </p>
            }
            else if (Array.isArray(value)){
                return(
                    <div key={key}> 
                        <h3>{key}:</h3>
                        <ul>
                        {value.map(({id, name}) => (
                                <li key={id}>{id} : {name}</li>
                            ))}
                        
                        </ul>
                    </div>
                )
            }
        
    })}
    </div>
    )
}