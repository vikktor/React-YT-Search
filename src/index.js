import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoDetail from './components/video_detail'
import Videolist from './components/video_list';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyCTN6Dcp-CIfDElXir5Ix7PP0Wtz4jDw0U';


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('križevci');
  }

  videoSearch (term) {
    YTSearch ({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
    });

  }

  render () {
    return (
      <div>
        <Searchbar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <Videolist
        onVideoSelect={selectedVideo => this.setState({selectedVideo})  }
        videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
