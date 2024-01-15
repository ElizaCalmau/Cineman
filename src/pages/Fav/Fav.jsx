import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { useFavSelector, removeFromFav } from "../../store/FavSlice/FavSlice";
import "./Fav.css";

export const Fav = () => {
  const dispatch = useDispatch();
  const favs = useFavSelector();

  const onDelete = (id) => {
    dispatch(removeFromFav(id));
  };

  const baseUrl = "https://image.tmdb.org/t/p/";
  const emptyPoster = "https://raw.githubusercontent.com/ElizaCalmau/Cineman/master/src/assets/empty_poster.jpg";
  return (
    <div className="favPage">
      <h2>Your favourite Movies</h2>
      <div className="favWrapper">
        {favs.map((favItem) => {
          const posterUrl = `${baseUrl}w500${favItem.mov.poster_path}`;
          return (
            <div className="favMovie" key={favItem.mov.id}>
              <div className="moviePoster">
                <img
                  src={
                    favItem.mov.poster_path !== null ? posterUrl : emptyPoster
                  }
                  alt={favItem.mov.title}
                />
              </div>
              <Link to={`/${favItem.mov.id}`} className='movPageLink'>{favItem.mov.title}</Link>
              <button onClick={() => onDelete(favItem.mov.id)}>🗑️</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
