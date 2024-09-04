import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
    <nav style={{backgroundColor:"grey", width:"100vw",height:"8vh"}}>
      <ul>
        ID
        NAME
        AGE
      </ul>
    </nav>
    {/* <div className="w3-bar w3-green" style={{height:"50px"}}>
    <Link to="/card" className="w3-bar-item w3-button" >Card</Link>
    <Link to="/page1" className="w3-bar-item w3-button" >Page1</Link>
    <Link to="/page2" className="w3-bar-item w3-button" >Page2</Link>

   </div> */}
       </>
  )
}