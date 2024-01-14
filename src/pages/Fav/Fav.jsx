import { useDispatch } from "react-redux";
import { useFavSelector, removeFromFav } from "../../store/FavSlice/FavSlice"
import './Fav.css'
export const Fav = () => {
    const dispatch = useDispatch();
    const favs = useFavSelector();
    const onDelete = (id) => {
        dispatch(removeFromFav(id))
    }
    const baseUrl = "https://image.tmdb.org/t/p/";
    const emptyPoster = 'https://raw.githubusercontent.com/ElizaCalmau/Cineman/develop/img/empty_poster.jpg';
    return(
        <div className="favPage">
            <h2>Your favourite Movies</h2>
            <div className="favWrapper">
                {favs.map((favItem) => {
                const posterUrl = `${baseUrl}w500${favItem.mov.poster_path}`
                return <div className="favMovie" key={favItem.mov.id}>
                        <div className="moviePoster">
                            <img src={favItem.mov.poster_path !== null ? posterUrl : emptyPoster} alt={favItem.mov.title}/>
                        </div>
                        <p>
                            {favItem.mov.title}
                        </p>
                        <button onClick={() => onDelete(favItem.mov.id)}>Remove</button>
                    </div>
})}
            </div>
        </div>
    )
}