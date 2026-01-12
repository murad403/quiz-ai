import { getCurrentToken } from '@/utils/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "http://10.10.12.28:8003/api",
    prepareHeaders: async(headers) => {
        const {accessToken} = await getCurrentToken();
        // console.log(accessToken);
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    }
});


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ["profile"],
    endpoints: () => ({
        // define your endpoints here
    }),
})

export default baseApi;