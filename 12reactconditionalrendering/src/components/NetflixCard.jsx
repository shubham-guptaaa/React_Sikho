import Seriesapi from '../api/Seriesapi.json'
import React from 'react'

function NetflixCard() {
  return (
    <ul>
      {Seriesapi.map((currElement) => {
        return (
          <li key={currElement.id}>
            <div>
              <img src={currElement.img_url}
                alt='Image'
                width="20%"
                height="20%"
              />
              </div>
              <h1>Name: {currElement.name}</h1>
              <h2>Rating: {currElement.rating}</h2>
              <p>Summary: {currElement.description}</p>
              <p>Genre: {currElement.genre}</p>
              <p>Cast: {currElement.cast}</p>
              <a href={currElement.watch_url} target='_blank'>
                {/* <button id='btn'>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
                <button>Watch Now</button>
              </a>
          </li>
        );
      })}
    </ul>
  )
}

export default NetflixCard