import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useDetailsSelector, fetchById } from "../../store/MovieDetailsSlice/MovieDetailsSlice";
import { useEffect } from "react";


export const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useDetailsSelector();

    console.log('MoviePage component is rendering, the id is ' + id);
    useEffect(() => {
      const numericId = parseInt(id, 10);
      dispatch(fetchById(numericId));
    }, [dispatch, id]);
  
    console.log(details);
    return(
        <div>
      <h3>Movie Page</h3>
      <p>prop: {details.budget}</p>
    </div>

    )
}