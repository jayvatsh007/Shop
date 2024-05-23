import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { CartContext } from "../App";

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
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Remove from Cart"
              onPress={() => removeFromCart(item.sku_code)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
