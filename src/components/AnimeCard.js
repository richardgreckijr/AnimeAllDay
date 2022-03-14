import React from 'react'

export default function Animecard({ anime }) {
    return (
        <article className='anime-card'>
            <figure>
                <a
                    href={anime.url}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                        src={anime.image_url}
                        alt='Anime image' />
                    <h3>{anime.title}</h3>
                </a>
            </figure>
        </article>
    )
}
