import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchTvDetails = ({ id }) => {
    return api.get(`/tv/${id}?language=ko-KR`)
}

export const useTvDetailsQuery = ({ id }) => {
    return useQuery({
        queryKey: ['tv-detail', { id }],
        queryFn: () => fetchTvDetails({ id }),
        select: (result) => result.data
    })
}