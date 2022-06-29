import React from 'react'

export default function Card(props){
  return(
  <div className="card--div">
    <div className="card--img--div">
        <img src= {props.item.imageUrl} className= "card--img" alt= {props.item.imageUrl}></img>
    </div>
    <div className="card--info">
      <h1 className="card--title">{props.item.title}</h1>
        <h2 className="card--location">{props.item.location}</h2>
        <h2 className="card--link"><a href ={props.item.googleMapsUrl}>View in Google Maps</a></h2>
        <h3 className="card--start">{props.item.startDate}</h3>
        <h3 className="card--description"> {props.item.description}</h3>
    </div>
  </div>
  )
}
