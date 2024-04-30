import React from 'react'
import "./TvReview.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const TvReview = ({ review }) => {
    const [more, setMore] = useState(false);

    return (
        <div className='review-card'>
            <div className='review-card-row'>
                <FontAwesomeIcon icon={faUser} style={{ color: "#85C7F2", marginRight: 10 }} />
                <div className='review-author'>{review?.author}</div>
            </div>
            <div className='review-card-row'>
                <FontAwesomeIcon icon={faFilm} style={{ color: "#85C7F2", marginRight: 10 }} />
                {
                    more ?
                        (<div>
                            <div className='review-content2'>{review?.content}</div>
                            <button className="fold-button" onClick={() => setMore(false)}>접기</button>
                        </div>)
                        :
                        (<div>
                            <div className='review-content'>{review?.content}</div>
                            <button className="fold-button" onClick={() => setMore(true)}>더보기</button>
                        </div>)
                }

            </div>
        </div>
    )
}

export default TvReview
