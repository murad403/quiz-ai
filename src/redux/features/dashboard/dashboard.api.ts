import baseApi from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        overview: builder.query({
            query: () => {
                return {
                    url: '/teacher/dashboard/',
                    method: 'GET'
                }
            }
        })
    })
});

export const {useOverviewQuery} = dashboardApi;