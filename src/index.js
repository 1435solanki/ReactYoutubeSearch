import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY = 'AIzaSyCKodPa5HsvQf3v6xq2Freatev1fAYhAT4';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('React Learning');
    // YTSearch({key: API_KEY, term:'React Js'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    console.log('videos',this.state.videos);
    return (
      <div>
        <SearchBar onVideoSearch={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => {this.setState({selectedVideo: selectedVideo})}}
        />
      </div>
      );
  }
}


ReactDOM.render( <App />, document.querySelector('.container'));

// youtube_api_key = AIzaSyCKodPa5HsvQf3v6xq2Freatev1fAYhAT4

