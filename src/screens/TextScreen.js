import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    //if the input are email,passwords,name

    <View>
      <Text>Enter Password: </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 5 ? (
        <Text>Name must be 5 or more characters</Text>
      ) : (
        <Text>{name}</Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
