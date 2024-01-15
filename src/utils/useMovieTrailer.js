import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useTrailerSlice, fetchTrailer } from "../store/TrailerSlice/TrailerSlice";

export const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const trailer = useTrailerSlice();

    useEffect(() => {
        const numID = parseInt(id, 10);
        if (!isNaN(id)) {
          dispatch(fetchTrailer(numID));
        }
      
      }, [dispatch, id]);
      
    return trailer;
}