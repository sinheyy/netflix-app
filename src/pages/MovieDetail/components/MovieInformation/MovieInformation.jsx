import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useMovieVideosQuery } from '../../../../hooks/useMovieVideos';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import "./MovieInformation.style.css"

const MovieInformation = ({ movie }) => {
    let { id } = useParams();
    console.log("video!!!id", id);
    const [show, setShow] = useState(false);

    const { data, isLoading, isError, error } = useMovieVideosQuery({ id });
    console.log("video!!!", data);

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='movie-info-section'>
            <div className="movie-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.poster_path})` }}>
                <div onClick={handleShow} className='movie-trailer'>예고{" "}
                    <FontAwesomeIcon icon={faYoutube} width={30} style={{ color: "#85C7F2" }} />
                </div>
            </div>
            <div className='movie-info'>
                <div className='movie-tagline'>{movie?.tagline}</div>
                <div className='movie-title'>{movie?.title}</div>
                <div className='movie-time'>{movie?.runtime}분 | {movie?.release_date} |
                    <div className='movie-adult' style={{ marginLeft: 5 }}>
                        {movie?.adult ?
                            <div>
                                <img width={20} src="https://i.namu.wiki/i/rWtp8mTtCfYIDlgDJIrxHFYzdlng55RKmu5RnPcaiFog74OKaj_UzD_t6ilT1v81abg5Qn7R0acnaZSLfpSg4-uewM098pJU0J4i6-bKubQMJTIg7Qh1I2bEeXbJ3Nus_VMISnXe1D0_fezvcej-Ww.svg"></img>
                            </div> :
                            <div>
                                <img width={20} src="https://i.namu.wiki/i/8iF56YLQcnTvbdpxqDKufO15dB93g-A-IGPWTo4YYABCpAMqqbrTkGerP3AtsoL-W8V-fN8k-zr4LrDxO1_U8zncvW6BHgfykbtA2u7iAMqXeCJKzjR4tPUr4EdNVRsLzcSnMsIz-SYcNUqz1Sdwxg.svg"></img>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    {movie?.genres.map((item) => (
                        <Badge className='movie-genre'>
                            {item.name}
                        </Badge>
                    ))}
                </div>
                <div className='movie-vote'>
                    <FontAwesomeIcon icon={faCheckToSlot} style={{ color: "#85C7F2", marginRight: 10 }} />
                    {movie?.vote_average}</div>
                <div className='movie-popularity' style={{ marginBottom: 15 }}>
                    <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#85C7F2", marginRight: 10 }} />
                    {movie?.popularity}</div>

                <div className='movie-overview'>{movie?.overview}</div>
                <div className='line'></div>
                <div>
                    <Badge className='movie-genre'>예산</Badge>
                    $ {movie?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                <div>
                    <Badge className='movie-genre'>수익</Badge>
                    $ {movie?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>[예고] {movie?.tagline}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <YouTube
                        videoId={data[0]?.key}
                        opts={{
                            width: "480",
                            height: "350",
                            playerVars: {
                                autoplay: 0,    // 1이면 자동 재생
                                rel: 0,
                                modestbranding: 1,
                                color: "#85C7F2"
                            }
                        }}
                        onEnd={(e) => { e.target.stopVideo(0); }}       // video 끝나면 첫 화면으로 돌아감
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="none" onClick={handleClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieInformation
