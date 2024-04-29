import React from 'react'
import YouTube from 'react-youtube'
import { useMovieVideosQuery } from '../../../../hooks/useMovieVideos';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';

const BannerVideo = ({ id }) => {
    console.log("movie id : ", id);
    const { data, isLoading, isError, error } = useMovieVideosQuery({ id });

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
            <YouTube
                videoId={data[0]?.key}
                opts={{
                    width: "400",
                    height: "300",
                    playerVars: {
                        autoplay: 1,    // 1이면 자동 재생
                        rel: 0,
                        modestbranding: 1,
                        color: "#85C7F2"
                    }
                }}
                onEnd={(e) => { e.target.stopVideo(0); }}       // video 끝나면 첫 화면으로 돌아감
            />
        </div>
    )
}

export default BannerVideo
