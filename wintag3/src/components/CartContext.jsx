import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  // Initialize cart from localStorage so state persists across page navigation/reloads
  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  // Works on both Home and Shop pages when clicking "Add to Cart"
  const addTocart = (product) => {
    setcartItems((prevItems) => {
      //Find if the item already exists
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
  };
  //Remove Items
  const removeFromCart = (productId) => {
    setcartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };
  //Update qty
  const Updatedqty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setcartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, qty } : item
      )
    );
  };
  //Clear items
  const clearCart = () => setcartItems([]);
  //Total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  //Total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addTocart,
        removeFromCart,
        Updatedqty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}