import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Input } from "../Input/Input"
import { fetchByTitle, fetchByYears, fetchByGenreAndYears } from "../../store/HeroCategoriesSlice/HeroCategoriesSlice"; 
import { Select } from "../Select/Select";
import './Search.css'

export const Search = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('')
    const [selectedOption, setSelectedOption] = useState('0')
    const dispatch = useDispatch();
    
    const onClick = () => {
        if(title){
            dispatch(fetchByTitle({title: title, year: start}))
        }
        if(start !== '' && end !== ''){
            dispatch(fetchByYears({start: start, end: end}))
            setTitle('')
        }
        if(selectedOption !== '0'){
            dispatch(fetchByGenreAndYears({start: start, end: end, genre: selectedOption}))
            setTitle('')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
         if(e.key === 'Enter'){
          onClick()
         }
        })
       })
    

    return(
        <div className='search'>
            <Input type='text' value={title} setValue={setTitle} label="Title:" />
            <Input type='number' value={start} setValue={setStart} label="From:"/>
            <Input type='number' value={end} setValue={setEnd} label="To:"/>
            <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            <button onClick={onClick} tabIndex="0">Search</button>
        </div>
    )
}