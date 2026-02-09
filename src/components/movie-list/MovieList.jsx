import './MovieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';

const MovieList = ({ data }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
