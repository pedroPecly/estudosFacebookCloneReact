import './styles/App.css';
import Stories from './Stories.js'
import Header from './Header.js';
import Feed from './Feed.js';

import FeedPost from './FeedPost.js';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Stories></Stories>
      <Feed></Feed>
      <FeedPost></FeedPost>

    </div>
  );
}

export default App;
