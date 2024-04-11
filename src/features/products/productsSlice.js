
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseURL } from '../../utils/constants'
import axios from 'axios';
import { shuffle } from '../../utils/common';


export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${baseURL}/products`);

      return response.data
    } catch(err) {

      return thunkAPI.rejectWithValue(err);
    }
  },
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category:  { id } }) => id === payload);
      state.related = shuffle(list)
    },
  },
  extraReducers: (bilder) => {
    bilder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    });
    bilder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false
    });
    bilder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false
    })
  }
})



export const { filterByPrice, getRelatedProducts } = productsSlice.actions
export default productsSlice.reducer