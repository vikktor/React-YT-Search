import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoDetail from './components/video_detail'
import Videolist from './components/video_list';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyCTN6Dcp-CIfDElXir5Ix7PP0Wtz4jDw0U';



class App extends Component {
  constructor (props) {
    super(props)

    this.state = { videos: [] };

    YTSearch ({key: API_KEY, term: 'rhcp'}, (videos) => {
    this.setState({ videos: videos});
    });
  }

  render () {
    return (
      <div>
        <Searchbar />
        <VideoDetail video={this.state.videos[0]}/>
        <Videolist videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
