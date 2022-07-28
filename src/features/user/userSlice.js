import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
