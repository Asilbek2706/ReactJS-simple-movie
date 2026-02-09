import './MovieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
            key={item.id}
            name={item.name}
            viewers={item.viewers}
            favourite={item.favourite}
            like={item.like}
            onDelete={() => onDelete(item.id)}
            onToggleProp={e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  );
};

export default MovieList;
