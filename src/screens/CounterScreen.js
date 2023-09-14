import { React, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.numberToChange) {
    //we cant modify state directly
    //use the {... object to do it}
    case "increse":
      return state + action > 0 ? state : state + 1;
    case "decrese":
      return state === 0 ? 0 : state - 1;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ numberToChange: "increse" });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ numberToChange: "decrese" });
        }}
      />
      <Text>Current Count {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
export default CounterScreen;
