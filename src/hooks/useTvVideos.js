import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchTvVideos = ({ id }) => {
    return api.get(`/tv/${id}/videos`)
}

export const useTvVideosQuery = ({ id }) => {
    return useQuery({
        queryKey: ['tv-video', { id }],
        queryFn: () => fetchTvVideos({ id }),
        select: (result) => result.data.results
    })
}