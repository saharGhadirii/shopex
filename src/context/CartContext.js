
import React, { createContext, useReducer, useEffect } from 'react';


export const CartContext = createContext();




const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE':
      return state
        .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0);

    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);

    case 'CLEAR':
      return [];

    default:
      return state;
  }
};




export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const saved = localStorage.getItem('shopex_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('shopex_cart', JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};