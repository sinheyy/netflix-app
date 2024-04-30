import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchTvRecommendations = ({ id }) => {
    return api.get(`/tv/${id}/recommendations?language=ko-KR`)
}

export const useTvRecommendationsQuery = ({ id }) => {
    return useQuery({
        queryKey: ['tv-recommendations', { id }],
        queryFn: () => fetchTvRecommendations({ id }),
        select: (result) => result.data.results
    })
}