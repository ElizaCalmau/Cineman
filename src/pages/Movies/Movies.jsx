import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCategoriesSelector } from "../../store/HeroCategoriesSlice/HeroCategoriesSlice";
import { addToFav, useFavSelector } from "../../store/FavSlice/FavSlice";
import "./Movies.css";

export const Movies = () => {
  const dispatch = useDispatch();
  const categories = useCategoriesSelector();
  const emptyPoster =
    "https://raw.githubusercontent.com/ElizaCalmau/Cineman/develop/img/empty_poster.jpg";
  const onAddToFav = (mov) => {
    dispatch(addToFav({ mov }));
  };
  const fav = useFavSelector()
  console.log(fav)
  return (
    <div className="homepageMovies">
      <h2> Results: </h2>
      {categories &&
        categories.map((mov) => {
          const baseUrl = "https://image.tmdb.org/t/p/";
          const posterUrl = `${baseUrl}w500${mov.poster_path}`;
          return (
            <div key={mov.id} className="movieWrapper">
              <div className="moviesPoster">
                <img
                  src={mov.poster_path !== null ? posterUrl : emptyPoster}
                  alt="img"
                />
              </div>
              <div className="movieDescription">
                <p>Name: {mov.original_title}</p>
                <p>Year: {mov.release_date.split("-")[0]}</p>
                <p>Rating: {mov.vote_average}</p>
                <p>Overiew: {mov.overview}</p>
                <Link to={`/${mov.id}`} className="Link">
                  See details...
                </Link>
              </div>
              <button onClick={() => onAddToFav(mov)}>❤</button>
            </div>
          );
        })}
    </div>
  );
};
