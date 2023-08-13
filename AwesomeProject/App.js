import { FlatList, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Learn HTML, CSS", key: "1" },
    { text: "Learn Java Script", key: "2" },
    { text: "Learn React", key: "3" },
    { text: "Learn Node.js", key: "4" },
  ]);

  const handleSubmit = (text) => {
    if (text === " ") {
      return;
    }
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((item) => item.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form onSubmit={handleSubmit} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteTodo={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
