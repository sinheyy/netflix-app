import React from 'react';
import { useTvReviewQuery } from '../../../../hooks/useTvReview';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import TvReview from '../TvReview/TvReview';
import "./TvDetailReview.style.css"

const TvDetailReview = () => {
    let { id } = useParams();
    const { data, isLoading, isError, error } = useTvReviewQuery({ id });
    //console.log("review", data);

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
        <div className='review-main'>
            <div className='data-length'>총 {data?.length}개</div>
            {data?.map((review, index) =>
                <div key={index}>
                    <TvReview review={review} />
                </div>)}
        </div>
    )
}

export default TvDetailReview
