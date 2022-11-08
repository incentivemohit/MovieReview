import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

const getPosterPath = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
}


function MovieCard(props) {
  const { id, title, poster, rd, rating, overview, language } = props;
  const [show, setShow] = useState(false);

  const getOverview = () => {
    setShow(true)
  }

  const closeBtn = () => {
    setShow(false)
  }

  return (
    <>

      {
        show ?

          //Showing Detail of Movie

          <div className=' mb-5 review-card '
          >

            <div className="close-btn-section w-100 text-end ">
              <button onClick={closeBtn} className="rounded-pill bg-danger text-white w-25 mt-1">Close <i className="fas fa-close"></i></button>
            </div>


            <div className="review-card-section-1 w-100">
              <p className='text-center h5  '>Overview</p>
              <p className='review-overview-desc' style={{ paddingLeft: "5px"}}>{overview}</p>
            </div>


            <div className="review-card-section-2 w-100">
              <p className="text-center h5 ">Movie Details</p>
              <ul className="list-group">

                <li className="list-group-item">Movie Title: {title}</li>
                <li className="list-group-item">Release Date: {rd}</li>
                <li className="list-group-item">Rating: {rating}</li>
                <li className="list-group-item">Language:{language}</li>
              </ul>
            </div>

          </div>


          :

          //Main Movie card
          <Link onClick={getOverview} >

            <div className="movie-card mb-5 "
              style={{
                backgroundImage: `url(${getPosterPath(poster)}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }} >

              <div className="voting-section w-100">
                <p className="voting bg-warning h6 p-1 w-25 rounded-pill text-center mt-2  "> {rating}</p>
              </div>


              <div className=" movie-detail-section text-center m-auto">

                <button className="movie-overview h5 rounded bg-success text-white border-warning p-3 m-auto w-100">Get Overview</button>

              </div>

            </div>

          </Link>



      }


    </>
  )
}

export default MovieCard