import React from 'react'
import '../PageContainer.css'
import MovieCard from '../../MovieCard/MovieCard';



function LatestContainer( props) {

    const {getContent}=props;
  

    return (
        <>
     
<h4 className='text-center py-2 bg-info mt-2'>Latest Movies</h4>


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

export default LatestContainer