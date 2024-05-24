import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import { CartContext } from "../App";

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart,cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/filter/product",
        {
          page: "1",
          pageSize: "10",
          sort: {
            creationDateSortOption: "DESC",
          },
        }
      );

      const { products } = response.data;
      setProducts(products);
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.buttonText}>Go to Cart ({cart?.length})</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        keyExtractor={(item,index) => (index ? index .toString() : null)}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
            onAddToCart={() => addToCart(item)}
            onRemoveFromCart={() => removeFromCart(item.id)}
          />
        )}
        contentContainerStyle={styles.productList}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("BarcodeScanner")}
      >
        <Text style={styles.buttonText}>Scan Barcode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#6200ee',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductsScreen;
