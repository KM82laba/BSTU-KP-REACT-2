import { createSlice } from '@reduxjs/toolkit';

const toadressSlice = createSlice({
    name: 'toadresss',
    initialState: {
        toadresss: [],
    },
    reducers: {
        addtoadress(state, action) {
            state.toadresss.push({
              id: 1,
              name: action.payload.name,
              street: action.payload.street,
              city: action.payload.city,
              country: action.payload.country,
              
            });
        },
        removetoadress(state, action) {
            state.toadresss = state.toadresss.filter(toadress => toadress.id !== action.payload.id);
        }
    },
});

export const {addtoadress, removetoadress} = toadressSlice.actions;
export default toadressSlice.reducer;