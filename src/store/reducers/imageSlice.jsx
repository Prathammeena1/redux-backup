import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const imageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setimage :(state,action)=>{
        state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setimage } = imageSlice.actions

export default imageSlice.reducer