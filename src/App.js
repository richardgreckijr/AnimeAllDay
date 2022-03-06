import Header from './components/Header'
import { useState, useEffect } from 'react';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
