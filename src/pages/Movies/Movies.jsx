import { useCategoriesSelector } from '../../store/HeroCategoriesSlice/HeroCategoriesSlice'
import './Movies.css'

export const Movies = () => {
    const categories = useCategoriesSelector();
    console.log(categories)
    return (
        <div className="homepageMovies">
            <h2> Results: </h2>
              {categories.map((mov)=> {
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
                        </div>
                    </div>
                ) 
            })}  

            
        </div>
    )
}