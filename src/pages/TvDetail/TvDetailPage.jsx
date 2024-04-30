import React from 'react'
import './TvDetailPage.style.css';
import { useParams } from 'react-router-dom'
import { useTvDetailsQuery } from '../../hooks/useTvDetail';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import TvDetailReview from './components/TvDetailReview/TvDetailReview';
import TvInformation from './components/TvInformation/TvInformation';
import TvRecommendations from './components/TvRecommendations/TvRecommendations';
import { useState } from 'react';
import Footer from '../../common/Footer/Footer';

const TvDetailPage = () => {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useTvDetailsQuery({ id });
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
      <TvInformation movie={data} />
      <div className='button-group'>
        <button className='button' onClick={() => setView(true)}>리뷰</button>
        <button className='button' onClick={() => setView(false)}>추천</button>
      </div>
      <div>
        {view ? <TvDetailReview /> : <TvRecommendations />}
      </div>
      <Footer />
    </div >
  )
}

export default TvDetailPage
