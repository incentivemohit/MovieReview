import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavLinks.css'

function NavLinks() {
  const [show, setShow] = useState(false);


  const Show = () => {
    setShow(true)
  }

  const Hide = () => {
    setShow(false)
  }


  return (
    <>


      {
        show ?
          <div className="header-navlinks-button mx-2">
            <button type='button' className='btn btn-warning' onClick={Hide}>
              <i className="fas fa-bars text-white bar-button" ></i>
            </button>
            <div className="list-group ">
              <Link to="/" className="list-group-item list-group-item-action list-group-item-primary ">Home</Link>
              <Link to="/toprated" className="list-group-item list-group-item-action list-group-item-success ">TopRated</Link>
              <Link to="/latest" className="list-group-item list-group-item-action list-group-item-warning ">Latest</Link>
              <Link to="/contact" className="list-group-item list-group-item-action list-group-item-danger ">Contact</Link>
              <Link to="/about" className="list-group-item list-group-item-action list-group-item-info ">About</Link>
            </div>

          </div>

          :
          <div className="header-navlinks-button mx-2">
            <button className='btn btn-warning' onClick={Show}>
              <i className="fas fa-bars text-white bar-button" ></i>
            </button>
          </div>

      }

      <div className="header-navlinks ">
      
<ul className="list-group list-group-horizontal" style={{listStyle:"none"}}>
<Link to="/" className="list-group-item h6" ><li >Home</li></Link>
<Link to="/toprated" className="list-group-item h6"><li >TopRated</li></Link>
<Link to="/latest" className="list-group-item h6"><li >Latest</li></Link>
<Link to="/contact" className="list-group-item h6"><li >Contact</li></Link>
<Link to="/about" className="list-group-item h6"><li >About</li></Link>
</ul>

      </div>




    </>
  )
}

export default NavLinks