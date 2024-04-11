import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseURL } from '../../utils/constants'
import axios from 'axios';


export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${baseURL}/categories`);

      return response.data
    } catch(err) {

      return thunkAPI.rejectWithValue(err);
    }
  },
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {

  },
  extraReducers: (bilder) => {
    bilder.addCase(getCategories.pending, (state) => {
      state.isLoading = true
    });
    bilder.addCase(getCategories.fulfilled, (state, actions) => {
      state.list = actions.payload;
      state.isLoading = false
    });
    bilder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false
    })
  }
})



// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default categoriesSlice.reducer