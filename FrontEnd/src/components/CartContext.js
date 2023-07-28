// // CartContext.js
// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== itemId)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider; // Export CartProvider as the default export
