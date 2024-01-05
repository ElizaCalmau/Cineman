import { useCategoriesSelector } from '../../store/HeroCategoriesSlice/HeroCategoriesSlice'
import './Movies.css'

export const Movies = () => {
    
    const categorie = useCategoriesSelector();

    return (
        <div className="homepageMovies">
            
            <ul>
              {categorie.map((mov)=> {
                return <li key={mov.id}>{mov.original_title}</li>
            })}  
            </ul>
            
        </div>
    )
}