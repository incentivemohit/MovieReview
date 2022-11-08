import React from 'react'
import './SearchContainer.css'
import MovieCard
    from '../MovieCard/MovieCard';
import MultiSectionPage from '../Pages/MultiSectionPage';



function SearchContainer(props) {

    const { movieList, length} = props;



    return (
        <>

            <h4 className='text-center py-2 bg-info mt-2'>Search Results - {length}</h4>

            {
               
                <div className="row ">

                {
                    movieList.map((data) => (
                        


                        <div className="col">
                            <MovieCard id={data.id} title={data.title} poster={data.poster_path} rd={data.release_date} rating={data.vote_average} overview={data.overview} language={data.original_language} /></div>))
                }
                 </div> 
                
            }

           

        </>
    )
}

export default SearchContainer