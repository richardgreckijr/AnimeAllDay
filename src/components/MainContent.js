import React from 'react'

export default function MainContent() {


    return (
        <main>
            <div className='main-head'>
                <form className='search'>
                    <input
                        type='search'
                        placeholder='Search for an Anime.'
                        required />
                </form>
            </div>

        </main>
    )
}
