import { createSlice } from '@reduxjs/toolkit';

const tocardSlice = createSlice({
    name: 'tocards',
    initialState: {
        tocards: [],
    },
    reducers: {
        addtocard(state, action) {
            state.tocards.push({
              idcard: 2,
              cardholder: action.payload.cardholder,
              cardnumber: action.payload.cardnumber,
              date: action.payload.date,
              cvc: action.payload.cvc,
            });
        },
        removetocard(state, action) {
            state.tocards = state.tocards.filter(tocard => tocard.idcard !== action.payload.idcard);
        }
    },
});

export const {addtocard, removetocard} = tocardSlice.actions;

export default tocardSlice.reducer;