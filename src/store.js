import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementByTen: (state) => {
            state.value += 10;
        },
        decrementByTen: (state) => {
            if (state.value >= 10) {
                state.value -= 10;
            } else {
                state.value = 0;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementByTen, decrementByTen, reset } = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
