import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchContainer from '../../Search/SearchContainer';
import TopRatedContainer from './TopRatedContainer';
import Footer from '../../Footer/Footer';
import NavLinks from '../../NavLinks/NavLinks';



function TopRated() {

    const [searchBox, setSearchBox] = useState("");
    const [timeOutId, updateTimeOut] = useState("");
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)

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



    const [getContent, setContent] = useState([]);

const loadData = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((res) => {
        console.log(res.data.results)
        setLoading(true)
        setContent(res.data.results);
    })

}

useEffect(() => {
   setTimeout(()=>{
    loadData();
   },800)
}, [0])




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
                        loading ? <TopRatedContainer getContent={getContent} length={movieList.length} /> :
                        <div className="d-flex justify-content-center loading-wheel" style={{height:"80vh"}}>
                        <div className="spinner-border text-danger" style={{width:"10rem",height:"10rem"}} role="status">
                    
                          <span className="sr-only">Loading...</span>
                          
                        </div>
                       
                      </div>
    }


<Footer/>
    
    </>
  )
}

export default TopRated