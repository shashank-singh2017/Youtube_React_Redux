import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_details';

// importing SearchBar from search_bar.js with proper file path name
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCRmwPMQ8pDAXwBSzV7G75vy_YOq_-z-1M';

class App extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      videos: [],
      selectedVideo: null
    };

    // initial search.
    this.videoSearch('shrey singhal');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},  (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        })
    });


  }

render() {
  return (
    <div>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onSelectVideo={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
        videos={this.state.videos} /> {/*method of passing data from parent(App) to child class (VideoList).*/}
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));
