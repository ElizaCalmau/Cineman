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
          <div className="movieWrapper">
              <div className="moviePoster">
                <img src={posterUrl} alt={details.title}/>
            </div>
            <div className="movieDescription">
              <p>Name: {details.title}</p>
              <p>Release date: {details.release_date}</p>
              <p>Director: {director.name}</p>
              <p>Genre: {details.genres && details.genres.map((genre) => genre.name).join(', ')}</p>
              <p>Tagline: {details.tagline}</p>
              <p>Rating: {details.vote_average}</p>
              <p>Cast: {cast && cast.slice(0, 5).map((actor) => actor.name).join(', ')} </p>            
              <p>Overview: {details.overview}</p>
            </div>
          </div>
          
          <div className="trailer">
            <h2>Trailer:</h2>
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