import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = id => {
    const newArr = data.filter(c => c.id !== id)
    setData(newArr);
  }

  const addFrom = item => {
    const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
    const newArr = [...data, newItem]
    setData(newArr);
  }

  const onToggleProp =(id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item
    })
    setData(newArr);
  }

  const searchHandler = (arr, term) => {
    if(term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  const filterHandler = (arr, filter) => {
    switch(filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViewers':
        return arr.filter(c => c.viewers > 850)
      default:
        return arr
    }
  }

  const updateTermHandler = term => setTerm(term)

  const updateFilterHandler = filter => setFilter(filter)

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
          setData(newArr)
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
  }, []);

    return (
      <>
        <div className="App font-monospace">
          <div className="content">
            <AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length} />
            <div className="search-panel">
              <SearchPanel updateTermHandler={updateTermHandler} />
              <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
            </div>
            {isLoading && "Loading..."}
            <MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} />
            <MoviesAddForm addForm={addFrom} />
          </div>
        </div>
      </>
    )
}

export default App;

/**class App extends Component {
 constructor(props) {
 super(props);
 this.state = {
 data: [
 { name: 'Empire of Osman', viewers: 811, favourite: false, like: false, id: 1 },
 { name: 'Ertugrul', viewers: 900, favourite: false, like: false, id: 2 },
 { name: 'Chuqur', viewers: 911, favourite: false, like: false, id: 3 },
 ],
 term: '',
 filter: 'all',
 }
 }

 onDelete = id => {
 this.setState(({ data }) => ({
 data: data.filter(c => c.id !== id)
 }))
 }

 addForm = item => {
 const newItem = {
 name: item.name,
 viewers: item.viewers,
 id: uuidv4(),
 favourite: false,
 like: false,

 }
 this.setState(({ data }) => ({
 data: [...data, newItem],
 }))
 }

 onToggleProp = (id, prop) => {
 this.setState(({ data }) => ({
 data: data.map(item => {
 if (item.id === id) {
 return { ...item, [prop]: !item[prop] };
 }
 return item
 }),
 }))
 }

 searchHandler = (arr, term) => {
 if(term.length === 0) {
 return arr
 }

 return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
 }

 filterHandler = (arr, filter) => {
 switch(filter) {
 case 'popular':
 return arr.filter(c => c.like)
 case 'mostViewers':
 return arr.filter(c => c.viewers > 850)
 default:
 return arr
 }
 }

 updateTermHandler = term => this.setState({ term })

 updateFilterHandler = filter => this.setState({ filter })*/
