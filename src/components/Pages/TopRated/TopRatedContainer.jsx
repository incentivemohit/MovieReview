import React from 'react'
import './TopRatedContainer.css'
import MovieCard from '../../MovieCard/MovieCard';



function TopRatedContainer( props) {

    const {getContent}=props;
  

    return (
        <>
     
<h4 className='text-center py-2 bg-info mt-2'>Top Rated Movies</h4>


            <div className="row ">

                {
                    getContent.length ?  getContent.map((data) => (
                 
                     <div className="col">  
                     <MovieCard id={data.id} title={data.title} poster={data.poster_path} rd={data.release_date} rating={data.vote_average} overview={data.overview} language={data.original_language}/>
                    </div>))
                       : "Data not found"
    
                }

            </div>


      


        </>
    )
}

export default TopRatedContainer