import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import TvsPage from './pages/TVs/TvsPage';
import TvDetailPage from './pages/TvDetail/TvDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 페이지
// 1. 홈페이지 "/"
// 2. 영화 전체 보여주는 페이지(서치 기능)  "/movies"
// 3. 영화 디테일 페이지  "/movies/:id"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />    {/* index : 부모의 path를 똑같이 쓰겠다 */}
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
          {/* <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
          <Route path="tvs">
            <Route index element={<TvsPage />} />
            <Route path=":id" element={<TvDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />   {/* 그 외 경로 방문 시 not found로 */}
      </Routes>

    </div>
  );
}

export default App;
