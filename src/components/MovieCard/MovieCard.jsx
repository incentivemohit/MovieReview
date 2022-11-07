import React from 'react'
import { useState } from 'react';
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

          <div className=' card bg-warning mx-2 mt-2 review-card'

            style={{
              width: "330px", height: "496px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }}
          >
            <div className="close-btn-section w-100 text-end ">
              <button onClick={closeBtn} className="rounded-pill bg-danger text-white w-25 mt-1">Close <i className="fas fa-close"></i></button>
            </div>


            <div className="review-card-section-1 w-100">
              <p className='text-center h5  '>Overview</p>
              <p className=' overview-desc' style={{ paddingLeft: "5px" ,height:"220px"}}>{overview}</p>
            </div>


            <div className="review-card-section-2 w-100">
              <p className="text-center h5 mt-3">Movie Details</p>
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

          <div className="movie-card mx-2 "
            style={{
              width: "330px", height: "496px",
              backgroundImage: `url(${getPosterPath(poster)}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }} >

            <div className="voting-section w-100">
              <p className="voting bg-warning h6 p-1 w-25 rounded-pill text-center mt-2  "> {rating}</p>
            </div>

            <div className="row movie-detail-section text-center m-auto">

              <div className="col">
                <button onClick={getOverview} className="movie-overview h5 rounded bg-success text-white border-warning p-1 m-auto w-100"> Overview</button>
              </div>
            </div>


          </div>



      }


    </>
  )
}

export default MovieCard