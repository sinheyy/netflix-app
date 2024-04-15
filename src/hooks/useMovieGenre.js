import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list?language=ko-KR`)
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        // genre는 한 번만 호출하면 되니까, 가끔 호출하면 된다 -> stale time 설정
        staleTime: 300000   // 5분
    })
}