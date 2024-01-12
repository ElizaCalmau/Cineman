import { useState } from "react"
import { useDispatch } from "react-redux";
import { Input } from "../Input"
import { fetchByTitle, fetchByYears, useCategoriesSelector } from "../../store/HeroCategoriesSlice/HeroCategoriesSlice"; 
import { Select } from "../Select";
import { sortGenre, useGenreSelector } from '../../store/GenreSlice/GenreSlice';

export const Search = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('')
    const [selectedOption, setSelectedOption] = useState('18')
    const categories = useCategoriesSelector();
    const dispatch = useDispatch();
    const genre = useGenreSelector();
    const filterByGenre = () => {
        const selectedId = parseInt(selectedOption)
        const match = categories.filter((film) => {
          return film.genre_ids.includes(selectedId);
        });
        dispatch(sortGenre(match))
      };
    
    const onClick = () => {
        if(title){
            dispatch(fetchByTitle({title: title, year: start}))
            console.log(title)
        }
        if(start !== '' && end !== '' ){
            dispatch(fetchByYears({start: start, end: end}))
            setTitle('')
            console.log(start)
        }
        filterByGenre()
    }
    console.log(genre)
    return(
        <div>
            <Input type='text' value={title} setValue={setTitle}/>
            <Input type='number' value={start} setValue={setStart}/>
            <Input type='number' value={end} setValue={setEnd}/>
            <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            <button onClick={onClick}>fetch</button>
        </div>
    )
}