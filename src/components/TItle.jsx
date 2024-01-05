import { useDispatch } from "react-redux"
import { fetchByTitle, useTitleSelector } from "../store/TitleSlice.jsx/TitleSlice";
import { useState } from "react";

export const Title = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const titles = useTitleSelector();
    const onClick = () => {
        dispatch(fetchByTitle({ value }))
    }
    console.log(value)
    return(
        <div>
            <ul>
                {titles.map((mov) => {
                    return <li key={mov.id}>{mov.original_title} , {mov.release_date}</li>
                })}
            </ul>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={()=>onClick({value})}>send</button>
        </div>
    )
}