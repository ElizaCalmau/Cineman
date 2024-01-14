import "./Input.css";

export const Input = ({ label, value, setValue }) => {
  return (
    <div className="searchInpWrapper">
      <label htmlFor={label}> {label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={label}
        className="searchInput"
      />
    </div>
  );
};
