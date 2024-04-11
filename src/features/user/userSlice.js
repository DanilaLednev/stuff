

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseURL } from '../../utils/constants'
import axios from 'axios';


export const createUser = createAsyncThunk(
  'users/getUsers',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/users`, payload);
      console.log(response)
      return response.data
    } catch(err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: 'signup',
    showForm: false
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    removeItemFromCart: (state, {payload}) => {
      state.cart = state.cart.filter(({ id }) => id !== payload.id ) 
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload
    }
  },
  extraReducers: (bilder) => {

    bilder.addCase(createUser.fulfilled, (state, actions) => {
      state.currentUser = actions.payload;
      
    });

  }
})



export const { addItemToCart, toggleForm, removeItemFromCart } = userSlice.actions
export default userSlice.reducer