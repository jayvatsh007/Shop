import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, Button } from "react-native";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import { CartContext } from "../App";

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart } = useContext(CartContext);

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

      // Assuming the response.data contains the structure you provided
      const { products } = response.data;
      setProducts(products);
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
      <FlatList
        data={products}
        keyExtractor={(item) => (item.id ? item.id.toString() : null)}
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
      />
      <Button
        title="Scan Barcode"
        onPress={() => navigation.navigate("BarcodeScanner")}
      />
    </View>
  );
};

export default ProductsScreen;
