import React from 'react'
import NopageS from '../assets/nopage.png'

function Nopage() {
  return (
    <div>
      <h1>Sorry this is not found</h1>
      <img src={NopageS} alt="My Image" />
    </div>
  )
}
export default Nopage