
export const Input = ({value, setValue}) => {

    return(
        <div>
            <p style={{color: '#000'}}>{value}</p>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
    )
}