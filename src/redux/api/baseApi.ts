import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://10.10.12.28:8003/api' }),
    endpoints: () => ({
        // define your endpoints here
    }),
})

export default baseApi;