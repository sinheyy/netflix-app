import React from 'react'
import './TvSlider.style.css'
import Carousel from 'react-multi-carousel';
import TvCard from '../TvCard/TvCard';

const TvSlider = ({ title, tvs, responsive }) => {
    return (
        <div>
            <h3 className='popular-text' style={{ marginTop: 30, marginLeft: 15 }}>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='tv-slider p-1'
                containerClass='carousel-container'
                responsive={responsive}
                showDots={true}
            >
                {tvs.map((tv, index) => <TvCard tv={tv} key={index} />)}
            </Carousel>
        </div>
    )
}

export default TvSlider
