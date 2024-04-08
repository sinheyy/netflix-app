import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
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

    return (
        <div
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
            className='movie-card'
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
                            <img width={20} src="https://i.namu.wiki/i/rWtp8mTtCfYIDlgDJIrxHFYzdlng55RKmu5RnPcaiFog74OKaj_UzD_t6ilT1v81abg5Qn7R0acnaZSLfpSg4-uewM098pJU0J4i6-bKubQMJTIg7Qh1I2bEeXbJ3Nus_VMISnXe1D0_fezvcej-Ww.svg"></img>
                        </div> :
                        <div>
                            <img width={20} src="https://i.namu.wiki/i/8iF56YLQcnTvbdpxqDKufO15dB93g-A-IGPWTo4YYABCpAMqqbrTkGerP3AtsoL-W8V-fN8k-zr4LrDxO1_U8zncvW6BHgfykbtA2u7iAMqXeCJKzjR4tPUr4EdNVRsLzcSnMsIz-SYcNUqz1Sdwxg.svg"></img>
                        </div>
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
