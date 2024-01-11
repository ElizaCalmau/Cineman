import { Link } from 'react-router-dom';
import { useCategoriesSelector } from '../../store/HeroCategoriesSlice/HeroCategoriesSlice'
import './Movies.css'

export const Movies = () => {
    const categories = useCategoriesSelector();
    return (
        <div className="homepageMovies">
            <h2> Results: </h2>
              {categories && categories.map((mov)=> {
                 const baseUrl = 'https://image.tmdb.org/t/p/';
                 const posterUrl = `${baseUrl}w185${mov.poster_path}`;
                return(
                    <div key={mov.id} className='movieWrapper'>
                        <div className='moviePoster'>
                            <img src={posterUrl} alt='img'/>
                        </div>
                        <div className='movieDescription'>
                            <p>Name: {mov.original_title}</p>
                            <p>Year: {mov.release_date.split('-')[0]}</p>
                            <p>Rating: {mov.vote_average}</p>
                            <p>Overiew: {mov.overview}</p>
                            <Link to={`/${mov.id}`} className='Link'>See details...</Link>     
                        </div>
                    </div>
                ) 
            })}  
        </div>
    )
}