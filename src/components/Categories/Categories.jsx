import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/HeroCategoriesSlice/HeroCategoriesSlice";
import "./Categories.css";

export const Categories = () => {
  const dispatch = useDispatch();
  const onClick = (category) => {
    dispatch(fetchCategories(category));
  };

  useEffect(() => {
    dispatch(fetchCategories("top_rated"));
  });

  return (
    <div className="categories">
      <button onClick={() => onClick("top_rated")}>Top-Rated</button>
      <button onClick={() => onClick("popular")}>Popular</button>
      <button onClick={() => onClick("now_playing")}>Now Playing</button>
      <button onClick={() => onClick("upcoming")}>Upcoming</button>
    </div>
  );
};
