import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import 'react-multi-carousel/lib/styles.css';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import "./UpcomingMovieSlide.style.css"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery()
    console.log("upcoming", data)

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
            <MovieSlider title="상영 예정작" movies={data.results} responsive={responsive} />
        </div>
    )
}

export default UpcomingMovieSlide
