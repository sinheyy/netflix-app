import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import "./PopularMovieSlide.style.css"
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()

    if (isLoading) {
        return (<div className="loader" tyle={{ margin: 10 }}>
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
            <h3 className='popular-text' style={{ marginTop: 15, marginLeft: 15 }}>Popular Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='movie-slider p-1'
                containerClass='carousel-container'
                responsive={responsive}
            >
                {data.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </Carousel>;
        </div>
    )
}

export default PopularMovieSlide
