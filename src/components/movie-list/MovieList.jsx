import './MovieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';

const MovieList = ({ data, onDelete }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} onDelete={() => onDelete(item.id)} />
      ))}
    </ul>
  );
};

export default MovieList;
