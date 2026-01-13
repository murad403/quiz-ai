import baseApi from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        overview: builder.query({
            query: () => {
                return {
                    url: '/teacher/dashboard/',
                    method: 'GET'
                }
            },
        }),
        analytics: builder.query({
            query: () =>{
                return {
                    url: "/teacher/analytics/",
                    method: "GET"
                }
            },
            providesTags: ["quizzes"]
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
            },
            providesTags: ["quizzes"]
        }),
        quizDetails: builder.query({
            query: (id: number) =>{
                return {
                    url: `/teacher/quiz-details/${id}/`,
                    method: "GET"
                }
            }
        }),
        createQuiz: builder.mutation({
            query: (data) =>{
                return {
                    url: '/quizzes/create-quiz/',
                    method: 'POST',
                    body: data
                }
            }
        }),
        generatedQuestions: builder.query({
            query: (id: number) =>{
                return {
                    url: `/quizzes/quiz/${id}/`,
                    method: 'GET'
                }
            },
            providesTags: ["quizzes"]
        }),
        publishQuiz: builder.mutation({
            query: (id: number) =>{
                return {
                    url: `/quizzes/publish-quiz/${id}/`,
                    method: 'POST'
                }
            },
            invalidatesTags: ["quizzes"]
        }),
        quizWelcome: builder.query({
            query: (id: string) =>{
                return {
                    url: `/quizzes/public/info/${id}/`,
                    method: 'GET'
                }
            }
        }),
        startQuiz: builder.mutation({
            query: (data) =>{
                return {
                    url: `/quizzes/start-quiz/${data?.id}/`,
                    method: 'POST',
                    body: data?.data
                }
            },
            invalidatesTags: ["quizzes"]
        }),
        submitQuiz: builder.mutation({
            query: (data) =>{
                return {
                    url: `/quizzes/submit/${data?.publishId}/`,
                    method: 'POST',
                    body: data?.answers
                }
            },
            invalidatesTags: ["quizzes"]
        })
    })
});

export const {useOverviewQuery, useAnalyticsQuery, useGetProfileInfoQuery, useUpdateProfileInfoMutation, useChangePasswordMutation, useDeleteUserMutation, useQuizzesQuery, useQuizDetailsQuery, useCreateQuizMutation, useGeneratedQuestionsQuery, usePublishQuizMutation, useQuizWelcomeQuery, useStartQuizMutation, useSubmitQuizMutation} = dashboardApi;