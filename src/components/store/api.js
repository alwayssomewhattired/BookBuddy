import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const api = createApi({
    reducerPath: 'apiOne',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`,

        prepareHeaders: (headers) => {
            const token = localStorage.getItem
        }
    })
})