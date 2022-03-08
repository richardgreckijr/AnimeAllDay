import Header from './components/Header';
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <SideBar topAnime={topAnime} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
