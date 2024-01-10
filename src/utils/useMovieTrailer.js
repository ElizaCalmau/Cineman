import { useDispatch } from "react-redux"
import { useTrailerSlice, fetchTrailer } from "../store/TrailerSlice/TrailerSlice";
import { useEffect } from "react";

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