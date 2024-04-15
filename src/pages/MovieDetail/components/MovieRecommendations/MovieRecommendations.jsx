import React from 'react'
import { useMovieRecommendationsQuery } from '../../../../hooks/useMovieRecommendations';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import "./MovieRecommendations.style.css"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const MovieRecommendations = () => {
    let { id } = useParams();
    const { data, isLoading, isError, error } = useMovieRecommendationsQuery({ id });
    console.log("추천", data);

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
        <div>
            <MovieSlider title="" movies={data} responsive={responsive} />
        </div>
    )
}

export default MovieRecommendations
