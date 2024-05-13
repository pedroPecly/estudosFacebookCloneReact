import './styles/App.css';
import { FaFacebook, FaSearch, FaAlignJustify } from 'react-icons/fa';
import Stories from './Stories.js'

import Header from './Header.js';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Stories></Stories>
    </div>
  );
}

export default App;
