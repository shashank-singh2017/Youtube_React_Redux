import React from 'react';
import ReactDOM from 'react-dom';

// importing SearchBar from search_bar.js with proper file path name
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRmwPMQ8pDAXwBSzV7G75vy_YOq_-z-1M';


const App = function () {
  return (
    <div>
        <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
