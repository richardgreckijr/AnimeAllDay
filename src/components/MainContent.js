import React from 'react';
import AnimeCard from './AnimeCard';

export default function MainContent(props) {
    
        return (
            <main>
                <div className='main-head'>
                    <form
                        className='search'
                        onSubmit={props.HandleSearch}>
                        <input
                            type='search'
                            placeholder='Search for an Anime.'
                            required
                            value={props.search}
                            onChange={e => props.SetSearch(e.target.value)} />
                    </form>
                </div>
                <div className='anime-list'>
                    {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id} />
                    ))}
                </div>
            </main>
        )
}
