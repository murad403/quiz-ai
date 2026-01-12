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
                console.log(data)
                return {
                    url: "/teacher/settings/",
                    method: "PUT",
                    body: data
                }
            },
            invalidatesTags: ["profile"]
        }),
        changePassword: builder.mutation({
            query: (data) =>{
                return {
                    url: '/teacher/settings/change-password/',
                    method: 'POST',
                    body: data
                }
            }
        }),
        deleteUser: builder.mutation({
            query: () =>{
                return {
                    url: "/teacher/delete-account/",
                    method: "POST"
                }
            }
        }),
        quizzes: builder.query({
            query: () =>{
                return {
                    url: "/teacher/my-quizzes/",
                    method: "GET"
                }
            }
        }),
        quizDetails: builder.query({
            query: (id: number) =>{
                return {
                    url: `/teacher/quiz-details/${id}/`,
                    method: "GET"
                }
            }
        })
    })
});

export const {useOverviewQuery, useAnalyticsQuery, useGetProfileInfoQuery, useUpdateProfileInfoMutation, useChangePasswordMutation, useDeleteUserMutation, useQuizzesQuery, useQuizDetailsQuery} = dashboardApi;