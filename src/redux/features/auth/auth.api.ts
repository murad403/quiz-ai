import baseApi from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => {
                return {
                    url: '/users/register-teacher/',
                    method: 'POST',
                    body: data
                }
            }
        }),
        signIn: builder.mutation({
            query: (data) =>{
                return {
                    url: '/users/login/',
                    method: 'POST',
                    body: data
                }
            }
        })
    })
});

export const {useSignUpMutation, useSignInMutation} = authApi;