import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <>
    <div className="list-group list-group-horizontal ">
    <Link to="/" className="list-group-item list-group-item-action list-group-item-primary ">Home</Link>
    <Link to="/toprated" className="list-group-item list-group-item-action list-group-item-success ">TopRated</Link>
    <Link to="/latest" className="list-group-item list-group-item-action list-group-item-warning ">Latest</Link>
    <Link to="/contact" className="list-group-item list-group-item-action list-group-item-danger ">Contact</Link>
    <Link to="/about" className="list-group-item list-group-item-action list-group-item-info ">About</Link>

</div>

    
    
    </>
  )
}

export default NavLinks