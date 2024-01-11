import { useState } from "react"
import { useDispatch } from "react-redux";
import { Input } from "../Input"
import { fetchByTitle, fetchByYears } from "../../store/HeroCategoriesSlice/HeroCategoriesSlice"; 


export const Search = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const onClick = () => {
        if(title){
            dispatch(fetchByTitle({title: title}))
            console.log(title)
        }
        if(start){
            dispatch(fetchByYears({start: start, end: end}))
            console.log(start)
        }
    }
    return(
        <div>
            <Input type='text' value={title} setValue={setTitle}/>
            <Input type='number' value={start} setValue={setStart}/>
            <Input type='number' value={end} setValue={setEnd}/>
            <button onClick={onClick}>fetch</button>
        </div>
    )
}