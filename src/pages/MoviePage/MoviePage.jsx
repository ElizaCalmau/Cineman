import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useMovieDetails } from "../../utils/useMovieDetails";
import { useMovieTrailer } from "../../utils/useMovieTrailer";
import './MoviePage.css'


export const MoviePage = () => {
  const [director, setDirector] = useState('')
  const [cast, setCast] = useState([])
  const { id } = useParams();
  const details = useMovieDetails(id)
  const trailer = useMovieTrailer(id)
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const posterUrl = `${baseUrl}w342${details.poster_path}`;

    useEffect(() => {

      if (details.credits && details.credits.crew && details.credits.crew.length > 0) {
      const directorObj = details.credits.crew.find((member) => member.job === 'Director');
      setDirector(directorObj)
      }

      if (details.credits && details.credits.cast && details.credits.cast.length > 0) {
        const castArr = details.credits.cast.map((member) => member );
        setCast(castArr)
      }
      
    }, [details.credits])
    
  console.log(details)

    return(
        <div className="moviePage">
          <div className="moviePoster">
              <img src={posterUrl} alt={details.title}/>
          </div>
          <div className="movieDescription">
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
    )
}