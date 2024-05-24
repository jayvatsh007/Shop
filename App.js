import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productId));
  };
  function getCartCount(name) {
    let product = cart.find((item) => item.name == name);
    if (product) {
      return product.count;
    }
    return 0;
  }
  function increaseCount(name) {
    let newCart = cart.map((item) => {
      if (item?.name == name) {
        return {
          ...item,
          count: item.count + 1,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  }

  function decreaseCount(name) {
    let newCart = [];
    if (getCartCount(name) > 1) {
      newCart = cart.map((item) => {
        if (item?.name == name) {
          return {
            ...item,
            count: item.count - 1,
          };
        } else {
          return item;
        }
      });
    } else {
      newCart = cart.filter((item) => item.name != name);
    }

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,increaseCount ,decreaseCount,getCartCount}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartContext.Provider>
  );
};

export default App;
