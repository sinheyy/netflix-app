import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import ClipLoader from "react-spinners/ClipLoader";
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css"

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log("Ddd", data);

    if (isLoading) {
        return (<div className="loader">
            <ClipLoader color="#85C7F2" loading={isLoading} size={150} />
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
        <div style={{
            backgroundImage: "url(" + `https://media.themoviedb.org/t/p/original/${data?.results[0].backdrop_path}` + ")"
        }}
            className='banner'
        >
            <div className='banner-text-area'>
                <h1 className='banner-text-title'>{data?.results[0].title}</h1>
                <p className='banner-text-overview'>{data?.results[0].overview}</p>
            </div>
        </div>
    )
}

export default Banner
