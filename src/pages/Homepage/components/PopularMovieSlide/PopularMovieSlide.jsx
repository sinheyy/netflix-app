import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import 'react-multi-carousel/lib/styles.css';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import "./PopularMovieSlide.style.css"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()

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
            <MovieSlider title="지금 인기 있는 영화를 살펴보세요!" movies={data.results} responsive={responsive} />
        </div>
    )
}

export default PopularMovieSlide
