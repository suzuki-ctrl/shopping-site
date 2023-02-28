import { createSlice } from "@reduxjs/toolkit";
import items from "../../../items";

const initialState = {
    items: [],
    amount: 0,
    total:0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: () => {
            return { items: [], amount:0, total:0 };
        },
        addItem: (state, action) => {
            
            const newItem = items.filter((item) => item.id === action.payload)
            .map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                img: item.img,
                amount: item.amount + 1,
            }));
            state.items.push(...newItem);
            
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.amount = item.amount + 1;
        },
        decrease: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.amount = item.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.items.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals, addItem } = cartSlice.actions;
export default cartSlice.reducer;