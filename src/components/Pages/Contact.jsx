import React, { useState } from 'react'
import axios from 'axios'
import SearchContainer from '../Search/SearchContainer';
import Footer from '../Footer/Footer';
import NavLinks from '../NavLinks/NavLinks';

function Contact() {

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

            <div className='container-fluid bg-dark pt-3'>
                <div className="row header p-3">

                    <div className="col col-md-3 ">
                        <h3 className='movie-title p-1 text-white mx-4 '><i class="fa-solid fa-film"></i>MovieReview</h3>
                    </div>

                    <div className="col col-md-5 ">
                        <div className="search d-flex "  >
                            <div className="search-icon-box ">
                                <i className=" search-icon fas fa-search"></i>
                            </div>
                            <input type="search" className='search-input rounded-right border-white border px-2' value={searchBox} onChange={searchHandle} style={{ width: "100%", height: "40px" }} placeholder='Search here...' />
                        </div>
                    </div>

                    <div className="col col-md-4">
                       <NavLinks/>

                    </div>
                </div>
            </div>

            {
                movieList.length ? <SearchContainer movieList={movieList} /> :
                    <div className="container">

                        <div className="card w-75 m-auto mt-3">

                            <h3 className="text-center">Contact Me</h3>

                            <ul className="list-group">

                                <li className="list-group-item">Business Email: mohitkumar.e21@nsut.ac.in</li>
                                <li className="list-group-item">Linkedin: https://www.linkedin.com/mohit-kumar
                                </li>

                            </ul>
                        </div>

                    </div>

            }

            <Footer />

        </>
    )
}

export default Contact