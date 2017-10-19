import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// importing SearchBar from search_bar.js with proper file path name
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCRmwPMQ8pDAXwBSzV7G75vy_YOq_-z-1M';

class App extends Component {

  constructor(props){
  	super(props);
  	this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'shrey singhal'},  (videos) => {
        this.setState({videos: videos})
    });

  }
render() {
  return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos} /> {/*method of passing data from parent(App) to child class (VideoList).*/}
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));
