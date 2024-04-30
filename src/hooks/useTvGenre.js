import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchTvGenre = () => {
    return api.get(`/genre/tv/list?language=ko-KR`)
}

export const useTvGenreQuery = () => {
    return useQuery({
        queryKey: ['tv-genre'],
        queryFn: fetchTvGenre,
        select: (result) => result.data.genres,
        // genre는 한 번만 호출하면 되니까, 가끔 호출하면 된다 -> stale time 설정
        staleTime: 300000   // 5분
    })
}