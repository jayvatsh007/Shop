import React, { useContext } from "react";
import { View, Text, Button, Image } from "react-native";
import { CartContext } from "../App";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View>
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>Price: ${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <Button
        title="Remove from Cart"
        onPress={() => removeFromCart(product.id)}
      />
    </View>
  );
};

export default ProductDetailsScreen;
