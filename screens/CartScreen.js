import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { CartContext } from "../App";
import ProductItem from "../components/ProductItem";

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <ProductItem
          product={item}
          isFromKart={true}
          onRemoveFromCart={() => removeFromCart(item.name)}
          />
        )}
      />
    </View>
  );
};

export default CartScreen;
