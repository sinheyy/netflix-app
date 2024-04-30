import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchSearchTv = ({ keyword, page }) => {
    return keyword
        ? api.get(`/search/tv?query=${keyword}&page=${page}?language=ko-KR`)
        : api.get(`/tv/popular?page=${page}?language=ko-KR`);
}

export const useSearchTvQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ['tv-search', { keyword, page }],
        queryFn: () => fetchSearchTv({ keyword, page }),
        select: (result) => result.data
    })
}