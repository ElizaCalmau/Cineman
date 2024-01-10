import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useDetailsSelector, fetchDetails } from "../../store/MovieDetailsSlice/MovieDetailsSlice";
import { useEffect, useState } from "react";
import { fetchTrailer, useTrailerSlice } from "../../store/TrailerSlice/TrailerSlice";


export const MoviePage = () => {
    const [director, setDirector] = useState('')
    const [cast, setCast] = useState([])
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useDetailsSelector();
    const trailer = useTrailerSlice();

    useEffect(() => {
      const numericId = parseInt(id, 10);
      dispatch(fetchDetails(numericId));
      dispatch(fetchTrailer(details.id))

      if (details.credits && details.credits.crew && details.credits.crew.length > 0) {
      const directorObj = details.credits.crew.find((member) => member.job === 'Director');
      setDirector(directorObj)
      }

      if (details.credits && details.credits.cast && details.credits.cast.length > 0) {
        const castArr = details.credits.cast.map((member) => member );
        setCast(castArr)
      }

  }, [details.id])


    return(
        <div>
        <h3>Movie Page</h3>
        <div className="moviePoster">

        </div>
        <div className="movieDetails">
          <ul>
            {details.genres && details.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>
            })}
          </ul>
          <div>Director: {director.name}</div>
          <ul>{cast.slice(0, 10).map((actor) => {
                return <li key={actor.id}>{actor.name}</li>
              })}
          </ul>
        </div>
        <div className="Trailer">
        <div>
      {trailer && (
        <iframe
          title="Movie Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
        />
      )}
    </div>
        </div>
        
      
      </div>
    )
}