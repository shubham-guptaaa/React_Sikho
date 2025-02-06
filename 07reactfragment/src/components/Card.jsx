import React from 'react'

function Card() {
    const name = "Squid-Game"
    const rating = "8.2"
    const Summary = "A survival drama that is one of the most-watched Netflix original series"
    const returnGenre = () => {
        const genre = "RomCom"
        return genre
    }
    return (
        <>
            <img src='squidgame.jpg' alt='Squid Game' width="20%" height="20%" />
            <h1>Name:{name}</h1>
            <h2>Rating:{rating}</h2>
            <p>Summary:{Summary}</p>
            <p> Genre: {returnGenre()}</p>
        </>
    )
}

export default Card