import Seriesapi from '../api/Seriesapi.json'
import React from 'react'
import Cardlist from './Cardlist'

function NetflixCard() {
  return (
    <ul>
      {Seriesapi.map((currElement) => {
        return <Cardlist key={currElement.id} currElement={currElement} />
      })}
    </ul>
  )
}

export default NetflixCard