// import React, { useContext } from "react";
// import { View, Text } from "react-native";
// import { RNCamera } from "react-native-camera";
// import axios from "axios";
// import { CartContext } from "../App";

// const BarcodeScannerScreen = ({ navigation }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleBarCodeRead = async ({ data }) => {
//     try {
//       const response = await axios.post(
//         "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/filter/product",
//         {
//           page: "1",
//           pageSize: "10",
//           sort: {
//             creationDateSortOption: "DESC",
//           },
//           filter: {
//             barcode: data,
//           },
//         }
//       );
//       const product = response.data.data[0];
//       if (product) {
//         addToCart(product);
//         navigation.navigate("ProductDetails", { product });
//       } else {
//         alert("Product not found");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera style={{ flex: 1 }} onBarCodeRead={handleBarCodeRead}>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <Text>Scan the Barcode</Text>
//         </View>
//       </RNCamera>
//     </View>
//   );
// };

// export default BarcodeScannerScreen;
