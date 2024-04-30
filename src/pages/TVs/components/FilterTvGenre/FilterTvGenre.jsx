import React from 'react'
import './FilterTvGenre.style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTvGenreQuery } from '../../../../hooks/useTvGenre';
const FilterTvGenre = ({ setGenre }) => {

    const { data: genreData } = useTvGenreQuery()
    console.log("tv 장르", genreData);

    return (
        <div>
            <Dropdown id="filter-dropdown" onSelect={(eventKey) => setGenre(eventKey)} >
                <Dropdown.Toggle id="dropdown-basic">
                    장르
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {genreData?.map((genre) =>
                        <Dropdown.Item eventKey={genre.id}>{genre.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default FilterTvGenre
