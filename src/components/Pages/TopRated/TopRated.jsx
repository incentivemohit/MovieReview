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
  
    <div className="row mx-5">

    {
        movieList.length ? <SearchContainer movieList={movieList} /> :
                        loading ? <TopRatedContainer getContent={getContent} /> :
                        <div className="d-flex justify-content-center " style={{height:"80vh"}}>
                        <div className="spinner-border text-danger" style={{width:"10rem",height:"10rem",marginTop:"15%"}} role="status">
                    
                          <span className="sr-only">Loading...</span>
                          
                        </div>
                       
                      </div>
    }


    </div>
<Footer/>
    
    </>
  )
}

export default TopRated