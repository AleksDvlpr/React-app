import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '784ff1a8-1b95-4e8e-8667-e4210f167c54',
    name: 'John',
    secondName: 'Doe',
    gender: 'male',
    profession: 'programmer',
    age: 25,
  },
];

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;