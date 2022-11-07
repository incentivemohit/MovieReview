import React, { useEffect, useState } from 'react'
import './Carousel.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import MovieCard from '../MovieCard/MovieCard';


const Carousel= () => {

    const [getContent, setContent] = useState([]);

    const loadData = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then((res) => {
            console.log(res.data.results)
            setContent(res.data.results);
        })

    }

    useEffect(() => {
        loadData();
    }, [])


  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      

      {
        getContent.map((data)=>(

            <SwiperSlide className='slide-card'>

              <MovieCard key={data.id} title={data.title} poster={data.poster_path} rd={data.release_date} rating={data.vote_average} overview={data.overview} language={data.original_language}/>
           
            </SwiperSlide>
            ))
      }
      
     
 
    </Swiper>
  );
};
    export default Carousel;