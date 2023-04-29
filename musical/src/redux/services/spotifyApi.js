import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'a74d009aacmsh819257c95d70580p1bbfb9jsna18490e09490'
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () =>
        '/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=50',
    }),
  }),
})

//spotify23.p.rapidapi.com/artist_albums?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100

export const { useGetTopChartsQuery } = spotifyApi
