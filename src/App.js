import Header from './components/Header';
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const FetchTopAnime = async () => {
    const data = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());

    SetTopAnime(data.top.slice(0, 5));
  }

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());
    SetAnimeList(data.results);
  }

  useEffect(() => {
    FetchTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <SideBar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
          topAnime={topAnime}
        />
      </div>
    </div>
  );
}

export default App;
