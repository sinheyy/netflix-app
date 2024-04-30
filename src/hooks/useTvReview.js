import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchTvReview = ({ id }) => {
    return api.get(`/tv/${id}/reviews`)
}

export const useTvReviewQuery = ({ id }) => {
    return useQuery({
        queryKey: ['tv-review', { id }],
        queryFn: () => fetchTvReview({ id }),
        select: (result) => result.data.results
    })
}