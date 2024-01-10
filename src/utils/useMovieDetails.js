import { useDispatch } from "react-redux";
import { fetchDetails, useDetailsSelector } from "../store/MovieDetailsSlice/MovieDetailsSlice"
import { useEffect } from "react";

export const useMovieDetails = (id) => {
    const dispatch = useDispatch();
    const details = useDetailsSelector();

    useEffect(()=>{
        const numID = parseInt(id)
        dispatch(fetchDetails(numID))
    }, [dispatch, id])
    return details;
}

