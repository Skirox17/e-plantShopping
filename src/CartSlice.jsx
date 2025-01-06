import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Incrementar la cantidad si ya existe
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Agregar un nuevo artículo
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        if (quantity <= 0) {
          // Eliminar el artículo si la cantidad es 0
          state.items = state.items.filter(item => item.name !== name);
        } else {
          existingItem.quantity = quantity; // Actualizar la cantidad
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
