import { useState } from "react"

export const Select = () => {
    const [selectedOption, setSelectedOption] = useState('value1')
    return(
        <div>
            <select name="select" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
            <option value="value1">Значение 1</option>
            <option value="value2" selected>Значение 2</option>
            <option value="value3">Значение 3</option>
            </select>
            <p>selected option {selectedOption}</p>
        </div>
    )
}