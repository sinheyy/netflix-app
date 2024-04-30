import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useTvVideosQuery } from '../../../../hooks/useTvVideos';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import "./TvInformation.style.css"

const TvInformation = ({ tv }) => {
    let { id } = useParams();
    console.log("video!!!id", id);
    console.log("tv tv tv tv ", tv);

    const [show, setShow] = useState(false);

    const { data, isLoading, isError, error } = useTvVideosQuery({ id });
    console.log("tv video!!!", data);

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
        <div className='tv-info-section'>
            <div className="tv-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv?.poster_path})` }}>
                <div onClick={handleShow} className='tv-trailer'>예고{" "}
                    <FontAwesomeIcon icon={faYoutube} width={30} style={{ color: "#85C7F2" }} />
                </div>
            </div>
            <div className='tv-info'>
                <div className='tv-title'>{tv?.name}</div>
                <div className='tv-time'>{tv?.episode_run_time}분</div>
                <div className='tv-time'>총 {tv?.number_of_episodes} 에피소드 | {tv?.number_of_seasons} 시즌 |
                    <div className='tv-adult' style={{ marginLeft: 5 }}>
                        {tv?.adult ?
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
                    {tv?.genres.map((item) => (
                        <Badge className='tv-genre'>
                            {item.name}
                        </Badge>
                    ))}
                </div>
                <div className='tv-vote'>
                    <FontAwesomeIcon icon={faCheckToSlot} style={{ color: "#85C7F2", marginRight: 10 }} />
                    {tv?.vote_average}</div>
                <div className='tv-popularity' style={{ marginBottom: 15 }}>
                    <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#85C7F2", marginRight: 10 }} />
                    {tv?.popularity}</div>

                <div className='tv-overview'>{tv?.overview}</div>
                <div className='line'></div>
                <div>
                    가장 최근 방송 정보
                    {tv?.last_episode_to_air.air_date}
                    {tv?.last_episode_to_air.episode_number}
                    {tv?.last_episode_to_air.name}
                    {tv?.last_episode_to_air.overview}
                    {tv?.last_episode_to_air.runtime}분
                    <div className="tv-still" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv?.last_episode_to_air.still_path})` }}></div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>[예고] {tv?.tagline}</Modal.Title>
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

export default TvInformation
