import React from 'react'

export default function Card(props){
  return(
    <div>
    <h1>{props.item.title}</h1>
    <h2>{props.item.location}</h2>
    <h2>{props.item.googleMapsUrl}</h2>
    <h3>{props.item.startDate}</h3>
    <h3>{props.item.endDate}</h3>
    <h3> {props.item.description}</h3>
    <h3> <img src= {props.item.imageUrl}></img></h3>
    </div>
  )
}
