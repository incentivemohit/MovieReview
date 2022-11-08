import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function MultiSectionPage() {

    const [topRated, setTopRated] = useState([]);
    const [Latest, setLatest] = useState([]);

    const loadTopRatedData = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((res) => {
            console.log(res.data.results)
            setTopRated(res.data.results);
        })

    }

    const loadUpcomingData = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((res) => {
            console.log(res.data.results)
            setLatest(res.data.results);
        })

    }

    useEffect(() => {
        loadTopRatedData();
        loadUpcomingData();
    }, [0])



    return (
        <>

            <div className="container-fluid m-auto ">

                {/* Top Rated Movies Section*/}

                <h4 className='text-center py-2 bg-info mt-2'>Top-Rated Movies</h4>
                <div className="row ">

                    {
                        topRated.length ? topRated.map((data) => (
                            <div className="col">   <MovieCard key={data.id} title={data.title} poster={data.poster_path} rd={data.release_date} rating={data.vote_average} overview={data.overview} language={data.original_language} /></div>
                        )) : "Data not found"

                    }

                </div>



                {/* Latest Movies Section*/}

                <h4 className='text-center py-2 bg-info mt-2'>Latest Movies</h4>
                <div className="row ">

                    {
                        Latest.length ? Latest.map((data) => (
                            <div className="col">   <MovieCard key={data.id} title={data.title} poster={data.poster_path} rd={data.release_date} rating={data.vote_average} overview={data.overview} language={data.original_language} /></div>
                        )) : "Data not found"

                    }

                </div>
            </div>


        </>
    )
}

export default MultiSectionPage