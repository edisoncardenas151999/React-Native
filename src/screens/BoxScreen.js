import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1}>child 1</Text>
      <Text style={styles.text2}>child 2</Text>
      <Text style={styles.text3}>child 3</Text>
    </View>
  );
};
//PARENT FLEX
//align-items = parent, default is stretch.
//flex-direction = parent. default column. u can change to row
//justifyContent = parent. default flex-start, make spacing

//CHILD FLEX
//Flex
//alignSelf = overides alignItems// flex-end,center,flex-start

//POSITION CHILD
//absolute = ignores alignitems: flexstart flexend
//relative = default

//TOP BTM LEFT RIGHT CHILD
//-it will overlap with other child

//fill up entire parent with 1 child
//-set position aboslute, set TOP BTM LEFT RIGHT 0
// = ...StyleSheet.absoluteFillObject sasme thing as code on top

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  text1: {
    borderWidth: 3,
    borderColor: "red",
    padding: 20,
    backgroundColor: "red",
  },
  text2: {
    borderWidth: 3,
    borderColor: "blue",
    // alignSelf: "center",
    // or ...StyleSheet.absoluteFillObject
    top: 50,
    padding: 20,
    backgroundColor: "blue",
  },
  text3: {
    borderWidth: 3,
    borderColor: "green",
    padding: 20,
    backgroundColor: "green",
  },
});
