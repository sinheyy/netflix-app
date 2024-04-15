import React from 'react'
import './MovieDetailPage.style.css';
import { useParams } from 'react-router-dom'
import { useMovieDetailsQuery } from '../../hooks/useMovieDetails';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import MovieDetailReview from './components/MoviewDetailReview/MovieDetailReview';
import MovieRecommendations from './components/MovieRecommendations/MovieRecommendations';
import { useState } from 'react';
import Footer from '../../common/Footer/Footer';
import MovieInformation from './components/MovieInformation/MovieInformation';

const MovieDetailPage = () => {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailsQuery({ id });
  console.log("detail", data);

  const [view, setView] = useState(true);   // true면 reviews, false면 recommendtations

  if (isLoading) {
    return (<div className="loader" style={{ margin: 10 }}>
      <BarLoader color="#85C7F2" loading={isLoading} width={150} height={10} />
    </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">
      <Alert.Heading>Error</Alert.Heading>
      <p>
        {error.message}
      </p>
    </Alert>;
  }



  return (
    <div className='main'>
      <MovieInformation movie={data} />
      <div className='button-group'>
        <button className='button' onClick={() => setView(true)}>리뷰</button>
        <button className='button' onClick={() => setView(false)}>추천</button>
      </div>
      <div>
        {view ? <MovieDetailReview /> : <MovieRecommendations />}
      </div>
      <Footer />
    </div >
  )
}

export default MovieDetailPage
