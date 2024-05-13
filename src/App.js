import './styles/App.css';
import Stories from './Stories.js'
import Header from './Header.js';
import Feed from './Feed.js';
import react_logo from './img/react-logo.png'
import usuario_padrao from './img/usuario_padrao.png';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Stories></Stories>
      <Feed></Feed>
      <div className='feedPost'>
        <div className='feedPostSingle'>
          <div className='feedPost_profile'>
            <img src={usuario_padrao}></img>
            <h3>Usuario Padrao<br></br><span>20:00</span></h3>
            
          </div>
          <div className='feedPost_content'>
            <p>texto de exemplo pra postagem sample</p>
            <img src={react_logo}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
