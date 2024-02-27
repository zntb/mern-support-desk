import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService';

const initialState = {
  tickets: null,
  ticket: null,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  extraReducers: (builder) => {
    //
  },
});

export default ticketSlice.reducer;
