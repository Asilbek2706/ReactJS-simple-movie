import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../context/index.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {_, dispatch} = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
        .then(response=> response.json())
        .then(json => {
          const newArr = json.map(item => ({
            name: item.title,
            id: item.id,
            viewers: item.id * 10,
            favourite: false,
            like: false
          }))
          dispatch({ type: 'GET_DATA', payload: newArr })
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
  }, []);

    return (
      <>
        <div className="App font-monospace">
          <div className="content">
            <AppInfo />
            <div className="search-panel">
              <SearchPanel />
              <AppFilter />
            </div>
            {isLoading && "Loading..."}
            <MovieList />
            <MoviesAddForm />
          </div>
        </div>
      </>
    )
}

export default App;