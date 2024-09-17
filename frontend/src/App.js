import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MovieGrid from './components/MovieGrid';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <MovieGrid />
      </div>
    </Provider>
  );
}

export default App;
