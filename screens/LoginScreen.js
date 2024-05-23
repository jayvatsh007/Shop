import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if username is "jay" and password is "shop"
    if (username === "jay" && password === "shop") {
      // Navigate to ProductScreen if credentials are correct
      navigation.navigate("Products");
    } else {
      // Show error message or handle incorrect credentials
      console.log("Incorrect username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login hello</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default LoginScreen;
