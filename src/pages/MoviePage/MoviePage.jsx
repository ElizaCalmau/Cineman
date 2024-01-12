import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMovieDetails } from "../../utils/useMovieDetails";
import { useMovieTrailer } from "../../utils/useMovieTrailer";
import "./MoviePage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const MoviePage = () => {
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const details = useMovieDetails(id);
  const trailer = useMovieTrailer(id);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterUrl = `${baseUrl}w342${details.poster_path}`;

  const onBack = () => {
    history.goBack()
  }

  useEffect(() => {
    if (
      details.credits &&
      details.credits.crew &&
      details.credits.crew.length > 0
    ) {
      const directorObj = details.credits.crew.find(
        (member) => member.job === "Director"
      );
      setDirector(directorObj);
    }

    if (
      details.credits &&
      details.credits.cast &&
      details.credits.cast.length > 0
    ) {
      const castArr = details.credits.cast.map((member) => member);
      setCast(castArr);
    }
  }, [details.credits]);

  return (
    <div className="moviePage">
      <div className="movieWrapper">
        <div className="moviePoster">
          <img src={posterUrl} alt={details.title} />
        </div>
        <div className="movieDescription">
          {details.title && <p>Name: {details.title}</p>}
          {details.release_date && <p>Release date: {details.release_date}</p>}
          {director.name && <p>Director: {director.name}</p>}
          <p>
            Genre:{" "}
            {details.genres &&
              details.genres.map((genre) => genre.name).join(", ")}
          </p>
          {details.tagline && <p>Tagline: {details.tagline}</p>}
          <p>Rating: {details.vote_average}</p>
          <p>
            Cast: {" "}
            {cast &&
              cast
                .slice(0, 5)
                .map((actor) => actor.name)
                .join(", ")}
          </p>
          {details.overview && <p>Overview: {details.overview}</p>}
        </div>
      </div>

      <div className="trailer">
        {trailer && (
          <div>
            <h2>Trailer:</h2>
            <iframe
              title="Movie Trailer"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          </div>
          
        )}
      </div>
      <button onClick={onBack}>Home</button>
    </div>
  );
};
