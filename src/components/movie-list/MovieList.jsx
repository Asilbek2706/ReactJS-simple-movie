import './MovieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';
import {Context} from "../../../context/index.jsx";
import {useContext} from "react";
import {filterHandler, searchHandler} from "../../utilities/data.js";

const MovieList = () => {
  const {state} = useContext(Context)

  const data = filterHandler(searchHandler(state.data, state.term), state.filter)

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
