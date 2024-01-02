import { useDispatch } from "react-redux"
import { useInputSelector, setInputValue } from "../store/InputSlice/InputSlice";
import { fetchMovies } from "../store/MoviesSlice/MoviesSlice";

export const Input = () => {
    const dispatch = useDispatch();
    const inputVal = useInputSelector();
    const onChange = (e) => {
        dispatch(setInputValue(e.target.value))
    }
    const onClick = () => {
        dispatch(fetchMovies())
    }
    return(
        <div>
            <p>input val from redux {inputVal}</p>
            <input type='text' value={inputVal} onChange={(e)=>onChange(e)}/>
            <button onClick={() => onClick()}>send</button>
        </div>
    )
}