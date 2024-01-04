import { useDispatch } from "react-redux"
import { useRangeSelector, fetchMoviesByRange } from "../store/YearsRangeSlice/YearRangeSlice";
import { useEffect } from "react";

export const YearsRange = () => {
    const dispatch = useDispatch();
    const moviesRange = useRangeSelector();
    useEffect(() => {
        dispatch(fetchMoviesByRange())
    }, [dispatch])
    return(
        <ul>
            {moviesRange.map((mov) => {
                return <li key={mov.id}>{mov.original_title}</li>
            })}
        </ul>
    )
}