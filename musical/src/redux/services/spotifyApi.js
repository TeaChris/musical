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
    getTracks: builder.query({
      query: () => '/tracks/?id=4WNcduiCmDNfmTEz7JvmLv&offset=0&limit=50',
    }),
  }),
})

//spotify23.p.rapidapi.com/artist_albums?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100

export const { useGetTracksQuery } = spotifyApi

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a74d009aacmsh819257c95d70580p1bbfb9jsna18490e09490',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  },
}

fetch(
  'https://spotify23.p.rapidapi.com/tracks/?id=4WNcduiCmDNfmTEz7JvmLv',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
