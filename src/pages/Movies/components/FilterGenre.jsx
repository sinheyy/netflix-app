import React from 'react'
import './FilterGenre.style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMovieGenreQuery } from '../../../hooks/useMovieGenre';
const FilterGenre = ({ setGenre }) => {

    const { data: genreData } = useMovieGenreQuery()
    console.log("자을", genreData);

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

export default FilterGenre
