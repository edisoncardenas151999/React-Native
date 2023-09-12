import { React, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const reducer = (state, action) => {
    //state == {red:number, green:number, blue:nmber}
    //action === {colorToChange: 'red,green,blue'}

    switch (action.colorToChange) {
      //we cant modify state directly
      //use the {... object to do it}
      case "red":
        return state.red + action.amount > 225 || state.red + action.amount < 0
          ? state
          : { ...state, red: state.red + action.amount };

      case "green":
        return state.green + action.amount > 225 ||
          state.green + action.amount < 0
          ? state
          : { ...state, green: state.green + action.amount };
      case "blue":
        return state.blue + action.amount > 225 ||
          state.blue + action.amount < 0
          ? state
          : { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
