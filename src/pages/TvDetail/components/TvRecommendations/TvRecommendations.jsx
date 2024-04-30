import React from 'react'
import { useTvRecommendationsQuery } from '../../../../hooks/useTvRecommendations';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import "./TvRecommendations.style.css"
import TvSlider from '../../../../common/TvSlider/TvSlider';
import { responsive } from '../../../../constants/responsive';

const TvRecommendations = () => {
    let { id } = useParams();
    const { data, isLoading, isError, error } = useTvRecommendationsQuery({ id });
    console.log("추천", data);

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
            <TvSlider title="" tvs={data} responsive={responsive} />
        </div>
    )
}

export default TvRecommendations
