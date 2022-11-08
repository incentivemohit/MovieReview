import React, { useState } from 'react'
import axios from 'axios'
import img from './mkk.jpg'
import SearchContainer from '../Search/SearchContainer';
import Footer from '../Footer/Footer';
import NavLinks from '../NavLinks/NavLinks'


function About() {


    const [searchBox, setSearchBox] = useState("");
    const [timeOutId, updateTimeOut] = useState("");
    const [movieList, setMovieList] = useState([])


    const fetchApi = async (string) => {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${string}`)
            .then((res) => {
                console.log(res.data.results)
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

        <div className='container-fluid bg-dark pt-3 m-auto'>
        <div className="row mb-2 pb-2 header">

            {/* Logo and Name of Website*/}
            <div className=" col  ">
                <h2 className='movie-title text-white mx-4 '><i class="fa-solid fa-film"></i>MovieReview</h2>
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



          

                {
                    movieList.length ? <SearchContainer movieList={movieList} /> :
                        <div className="container ">

                            <div className="card m-auto mt-3 p-2">

                            <h4 className="text-center p-2 w-75 my-3 bg-warning rounded-pill  m-auto">About Me</h4>
 
                                <div className="row">
                                <div className="col-md-6">
                                <img src={img} alt="" className='w-100 h-100'/>
                                </div>
                                <div className=" col-md-6">
                                <p className="text-center display-6 mt-4">

Hii Visitor, <br />My name is Mohit Kumar and I love to work with MERN Stack web technologies therefore,I have developed this movie review site for you using TMDB Api which shows you details about movies.

</p>
                                </div>
                                </div>

                               
                            </div>


                        </div>

                }


        

            <Footer />

        </>
    )
}

export default About