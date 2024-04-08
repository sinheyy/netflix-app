import React from 'react'
import './Homepage.style.css';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import Footer from './components/Footer/Footer';
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';

// 1. 배너 만들기 -> popular movie를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className='main'>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
      <Footer />
    </div>
  )
}

export default Homepage
