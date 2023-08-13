import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function Form({ onSubmit }) {
  const [text, setText] = useState("");
  const onChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Write todo"
      />
      <Button
        style={styles.btn}
        title="Add todo"
        onPress={() => onSubmit(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
  btn: {
    padding: 10,
  },
});
