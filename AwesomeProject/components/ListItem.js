import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem({ el, deleteTodo }) {
  return (
    <TouchableOpacity onPress={() => deleteTodo(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});
