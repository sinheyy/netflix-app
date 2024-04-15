import React, { useEffect } from 'react'
import './MoviePage.style.css';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Footer from '../../common/Footer/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import FilterGenre from './components/FilterGenre';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// how to 페이지네이션
// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할 때마다 page 바꿔주기
// page 값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams()
  const keyword = query.get("q");
  const [sort, setSort] = useState("");
  const [genre, setGenre] = useState("");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  let filteredData = data?.results;

  if (sort == "desc") {
    filteredData?.sort(function (a, b) {
      return b.popularity - a.popularity;
    })
  }
  else if (sort == "asc") {
    filteredData?.sort(function (a, b) {
      return a.popularity - b.popularity;
    })
  }

  if (genre != "") {
    filteredData = filteredData?.filter((movie) => movie.genre_ids.includes(parseInt(genre)))
  }


  const handlePageClick = ({ selected }) => {
    //console.log("page", selected)
    setPage(selected + 1);
    setSort("");
    //setGenre("");
  }

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
    <div className='main'>
      <div>
        <div className="container" style={{ margin: 0 }}> {/* sort, filter와 카드 부분 */}
          <div className='filter-container'>
            <Dropdown onSelect={(eventKey) => setSort(eventKey)} id="filter-dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                정렬
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="desc">인기도 높은순</Dropdown.Item>    {/*내림차순*/}
                <Dropdown.Item eventKey="asc">인기도 낮은순</Dropdown.Item>     {/*오름차순*/}
              </Dropdown.Menu>
            </Dropdown>
            <FilterGenre setGenre={setGenre} />

          </div>

          <div>
            <div className='movie-length'>
              {" "}총 {data?.total_results.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 작품{" "}
            </div>
            <div className='cards-container' >
              {filteredData?.map((movie, index) =>
                <div key={index} className="card">
                  <MovieCard movie={movie} />
                </div>)}
            </div>
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data?.total_pages}    // 전체 페이지
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              activeLinkClassName="active-link"
              disabledClassName="disabled"
              disabledLinkClassName="disabled-link"
              renderOnZeroPageCount={null}
              forcePage={page - 1}    // page를 0부터 count함
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default MoviePage
