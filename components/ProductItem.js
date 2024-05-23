import React from "react";
import { View, Text, Button } from "react-native";

const ProductItem = ({ product, onPress, onAddToCart, onRemoveFromCart }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Button title="View Details" onPress={onPress} />
      <Button title="Add to Cart" onPress={onAddToCart} />
      <Button title="Remove from Cart" onPress={onRemoveFromCart} />
    </View>
  );
};

export default ProductItem;
