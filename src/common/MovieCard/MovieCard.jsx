import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery()
    const navigate = useNavigate();
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

    // 디테일 페이지로 이동
    const goToDetail = () => {
        navigate(`/movies/${movie?.id}`);
    }

    return (
        <div
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
            className='movie-card'
            onClick={() => goToDetail()}
        >
            <div className='overlay'>
                <h1 className='movie-title'>{movie?.title}</h1>
                <div className='movie-release' style={{ marginBottom: 15 }}>({movie?.release_date})</div>
                <div style={{ marginBottom: 15 }}>
                    {showGenre(movie?.genre_ids).map((id) => (
                        <Badge className='movie-genre'>
                            {id}
                        </Badge>
                    ))}
                </div>
                <div>
                    <div className='movie-vote'>
                        <FontAwesomeIcon icon={faCheckToSlot} style={{ color: "#85C7F2", marginRight: 10 }} />
                        {movie?.vote_average}</div>
                    <div className='movie-popularity' style={{ marginBottom: 15 }}>
                        <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#85C7F2", marginRight: 10 }} />
                        {movie?.popularity}</div>
                    <div>{movie?.adult ?
                        <div>
                            <img width={20} src="https://i.namu.wiki/i/qRizC1ozMmBsZwUoGhcOpgEChGQTkQ9dt0oF_tqCNrLnAHR80PqKZFGY6OISgeCnIFg0UVUKB54lVJcoGaVt0M0r7cFSn1lNpuBsLIfNmwZ3t1aLXmP9D4UYK3TNQHVQ8BlAhJaSOjMjKN3JfhnByQ.svg"></img>
                        </div> :
                        <div>
                            <img width={20} src="https://i.namu.wiki/i/EWsHx_1MsMOI0kRCfuPEG-2ZJDd37YdaNGoaoIfaw9VOIH_B2JvY7eQO-0-JAQVLL12sD6PeNvtbgjwoVGyd4OpoWnZ_yxhta780r_oXZWVe4XaTpXS5-eKj6trxK0KP5iMnPXqNhW__rhTx9L2Rqg.svg"></img>
                        </div>
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
