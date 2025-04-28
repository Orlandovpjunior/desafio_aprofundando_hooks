import { createContext, ReactNode, useState, useEffect } from "react";
import { produce } from "immer";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const CART_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (storedCart) {
      return JSON.parse(storedCart)
    }
    return []
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  function resetCart() {
    setCartItems([])
  }
  

  function addToCart(item: CartItem) {
    setCartItems((state) =>
      produce(state, (draft) => {
        const itemInCart = draft.find((cartItem) => cartItem.id === item.id)
        if (itemInCart) {
          itemInCart.quantity += item.quantity
        } else {
          draft.push(item)
        }
      })
    );
  }

  function removeFromCart(id: number) {
    setCartItems((state) =>
      produce(state, (draft) => {
        const index = draft.findIndex((cartItem) => cartItem.id === id)
        if (index >= 0) {
          draft.splice(index, 1)
        }
      })
    );
  }

  function increaseQuantity(id: number) {
    setCartItems((state) =>
      produce(state, (draft) => {
        const item = draft.find((cartItem) => cartItem.id === id)
        if (item) {
          item.quantity++
        }
      })
    );
  }

  function decreaseQuantity(id: number) {
    setCartItems((state) =>
      produce(state, (draft) => {
        const item = draft.find((cartItem) => cartItem.id === id)
        if (item && item.quantity > 1) {
          item.quantity--
        }
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
