import React from 'react'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Title(){
  return (
  <div className="title--main">
    <nav >
      <FontAwesomeIcon icon={faEarthAmericas} className="earth"/>cool travel blog</nav>
  </div>
  )
}
