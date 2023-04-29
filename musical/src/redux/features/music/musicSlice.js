import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  musicList: [],
  isFetching: false,
  error: null,
  isLoading: true,
}

const musicSlice = createSlice({
  name: 'music',
  initialState,
})

// console.log(musicSlice)
export default musicSlice.reducer
