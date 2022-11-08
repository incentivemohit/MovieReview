import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import SearchContainer from '../Search/SearchContainer'
import NavLinks from '../NavLinks/NavLinks'
import MultiSectionPage from '../Pages/MultiSectionPage'


function Home() {

    const [searchBox, setSearchBox] = useState("");
    const [timeOutId, updateTimeOut] = useState("");
    const [movieList, setMovieList] = useState([])


    const fetchApi = async (string) => {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${string}`)
            .then((res) => {
                setMovieList(res.data.results)
            })


    }

    const searchHandle = (e) => {

        clearTimeout(timeOutId);
        setSearchBox(e.target.value)
        const timeOut = setTimeout(() => fetchApi(e.target.value), 500);
        updateTimeOut(timeOut)

    }


    return (
        <>


            <div className='container-fluid bg-dark pt-3 '>
                <div className="row mb-2 pb-2 header">

                    {/* Logo and Name of Website*/}
                    <div className=" col  ">
                        <p className='movie-title text-white mx-4 '><i className="fa-solid fa-film movie-title-icon"></i>MovieReview</p>
                    </div>

                    {/* Search Bar*/}
                    <div className="col  ">
                        <div className="search d-flex "  >

                            <div className="search-icon-box ">
                                <i className=" search-icon fas fa-search"></i>
                            </div>
                            <input type="search" className='search-input rounded-right  border-white border px-2' value={searchBox} onChange={searchHandle} style={{ width: "100%", height: "40px" }} placeholder='Search here...' />
                        </div>
                    </div>

                    <div className="col ">
                        {/* Navigation Link component*/}

                        <NavLinks />
                       
                    </div>


                </div>
            </div>

            {/* Showing multiple Movie Cards using Carousel*/}
            <Carousel />


            {/* Showing Searched Movies otherwise HomePage Movies*/}
         

                {
                    movieList.length ?

                        <SearchContainer movieList={movieList} length={movieList.length} /> :
                        <MultiSectionPage />

                }

           


            {/* Footer*/}
            <Footer />






        </>
    )
}

export default Home