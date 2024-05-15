import './styles/App.css';
import Stories from './Stories.js'
import Header from './Header.js';
import Feed from './Feed.js';
import FeedPost from './FeedPost.js';
import React from 'react';
import { useState, useEffect } from 'react';
import { db, storage } from './firebase.js';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
        return {
          info: doc.data()
        }
      }));
    });
  }, []);

  return (
    <div className='App'>
      <Header></Header>
      <Stories></Stories>
      <Feed></Feed>
      {
        posts.map((val)=>{
          return(
            <FeedPost nome={val.info.nome} conteudo={val.info.conteudo} imagem={val.info.imagem}></FeedPost>
          );
        })
      }
      

    </div>
  );
}

export default App;
