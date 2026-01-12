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
        }),
        analytics: builder.query({
            query: () =>{
                return {
                    url: "/teacher/analytics/",
                    method: "GET"
                }
            }
        }),
        getProfileInfo: builder.query({
            query: () =>{
                return {
                    url: "/teacher/settings/",
                    method: "GET"
                }
            },
            providesTags: ["profile"]
        }),
        updateProfileInfo: builder.mutation({
            query: (data) =>{
                return {
                    url: "/teacher/settings/",
                    method: "PUT",
                    body: data
                }
            },
            invalidatesTags: ["profile"]
        })
    })
});

export const {useOverviewQuery, useAnalyticsQuery, useGetProfileInfoQuery, useUpdateProfileInfoMutation} = dashboardApi;