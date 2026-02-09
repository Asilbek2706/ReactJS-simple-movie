import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Empire of Osman', viewers: 811, favourite: false, id: 1 },
        { name: 'Ertugrul', viewers: 900, favourite: false, id: 2 },
        { name: 'Chuqur', viewers: 911, favourite: true, id: 3 },
      ]
    }
  }

  onDelete = id => {
    this.setState(({ data }) => ({
      data: data.filter(c => c.id !== id)
    }))
  }

  addForm = item => {
      this.setState(({ data }) => ({
        data: [...data, item],
      }))
  }

  render() {
    const { data } = this.state;
    return (
        <div className="App font-monospace">
          <div className="content">
            <AppInfo />
            <div className="search-panel">
              <SearchPanel />
              <AppFilter />
            </div>
            <MovieList data={data} onDelete={this.onDelete} />
            <MoviesAddForm addForm={this.addForm} />
          </div>
        </div>
    );
  }
}

export default App;
