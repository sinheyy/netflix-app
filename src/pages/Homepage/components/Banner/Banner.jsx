import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css"
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import Badge from 'react-bootstrap/Badge';
import BannerVideo from '../BannerVideo/BannerVideo';

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log("Ddd", data);

    const { data: genreData } = useMovieGenreQuery()
    //console.log("genre", genreData)

    // genre id를 받아서 genre를 반환
    const showGenre = (genreIdList) => {
        if (!genreData) return []   // genreData가 비어 있을 경우 빈 배열 반환 - 아무것도 안 띄우기

        // 이름만 모이게 됨
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        })

        return genreNameList
    }

    if (isLoading) {
        return (<div className="loader" style={{ margin: 10 }}>
            <BarLoader color="#85C7F2" loading={isLoading} width={150} height={10} />
        </div >
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
                <p className='banner-text-overview'>
                    <div>
                        <h1 className='banner-text-title'>{data?.results[0].title}</h1>
                        <div className='banner-date-genre'>
                            <div className='banner-date'>{data?.results[0].release_date}</div>
                            <div>
                                {showGenre(data?.results[0].genre_ids).map((id) => (
                                    <Badge className='movie-genre'>
                                        {id}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        {data?.results[0].overview}
                    </div>

                    <div className='banner-video'>
                        <BannerVideo id={data?.results[0].id} />
                    </div>
                </p>
            </div>


        </div>
    )
}

export default Banner
