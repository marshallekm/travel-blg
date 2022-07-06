import React from 'react'
import funFact from '../images/fun-fact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){
  return(
  <div className="card--div">
    <div className="card--img--div">
        <img src= {props.item.imageUrl} className= "card--img" alt= {props.item.imageUrl}></img>
    </div>
    <div className="card--info">
        <div className="card--links">
          <h2 className="card--location"><FontAwesomeIcon icon={faLocationDot} className="location-dot" />{props.item.location}</h2>
          <h2 className="card--link"><a href ={props.item.googleMapsUrl}>View in Google Maps <FontAwesomeIcon icon={faMap} /></a></h2>
        </div>
      <h1 className="card--title">{props.item.title}</h1>
      <h3 className="card--start"> Date: {props.item.startDate}</h3>
      <h3 className="card--description"> <img className= "fun--fact" src={funFact} alt=""/> {props.item.description}</h3>
    </div>
  </div>
  )
}
