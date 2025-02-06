import React from 'react'

function Cardlist(props) {
    // console.log(props)
    return (
        <li>
          <div>
            <img src={props.currElement.img_url}
              alt='Image'
              width="20%"
              height="20%"
            />
            </div>
            <h1>Name: {props.currElement.name}</h1>
            <h2>Rating: {props.currElement.rating}</h2>
            <p>Summary: {props.currElement.description}</p>
            <p>Genre: {props.currElement.genre}</p>
            <p>Cast: {props.currElement.cast}</p>
            <a href={props.currElement.watch_url} target='_blank'>
              {/* <button id='btn'>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
              <button>Watch Now</button>
            </a>
        </li>
      );
}

export default Cardlist