import { useDispatch } from "react-redux"
import { fetchMovies } from "../store/MoviesSlice/MoviesSlice";
import { useState } from "react";

export const Input = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const onClick = () => {
        dispatch(fetchMovies({value}))
    }
    return(
        <div>
            <p>input val from redux {value}</p>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={onClick}>send</button>
        </div>
    )
}