import { configureStore } from '@reduxjs/toolkit'

import musicReducer from './features/music/musicSlice'
import { spotifyApi } from './services/spotifyApi'

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    music: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
})
