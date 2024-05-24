import React, { useContext } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { CartContext } from "../App";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart,cart, removeFromCart } = useContext(CartContext);
const isProductPresentInCart = (name)=>{
const isPresent = cart?.find(item=>item?.name==name)
return isPresent!=undefined
}
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: ₹{product.price}</Text>
        <View style={styles.buttonContainer}>
          {isProductPresentInCart(product.name)?<Button
            title="Remove from Cart"
            onPress={() => removeFromCart(product.name)}
            color="#FF5722"
          />: <Button
          title="Add to Cart"
          onPress={() => addToCart(product)}
          color="#4CAF50"
        />}
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default ProductDetailsScreen;
