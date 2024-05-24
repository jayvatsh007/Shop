import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../App";

const ProductItem = ({
  product,
  onPress,
  onAddToCart,
  onRemoveFromCart,
  isFromKart = false,
}) => {
  const { cart, increaseCount, decreaseCount, getCartCount } = useContext(CartContext);
  const isProductPresentInCart = (name) => {
    const isPresent = cart?.find((item) => item?.name == name);
    return isPresent != undefined;
  };

  const renderAddToCart = () => {
    if (isProductPresentInCart(product.name)) {
      return (
        <View style={styles.cartControls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => decreaseCount(product.name)}
          >
            <Text style={styles.controlButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>{getCartCount(product.name)}</Text>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => increaseCount(product.name)}
          >
            <Text style={styles.controlButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Button
          title="Add to Cart"
          onPress={onAddToCart}
          color="#28a745"
          style={styles.button}
        />
      );
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{product.name}</Text>
      {isFromKart && (
        <Text style={styles.cartItemText}>{getCartCount(product.name)} items</Text>
      )}
      <View style={styles.buttonContainer}>
        {!isFromKart ? (
          renderAddToCart()
        ) : (
          <Button
            title="Remove from Cart"
            onPress={onRemoveFromCart}
            color="#dc3545"
            style={[styles.button, styles.cartButton]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    opacity: 0.8,
  },
  cartButton: {
    flex: 0.5,
  },
  cartControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  controlButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#007bff",
  },
  controlButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemCount: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default ProductItem;
