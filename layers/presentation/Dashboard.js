import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { newToDo, getAllToDo } from "../business/todo";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(async () => {
    setTodos(await getAllToDo());
  }, []);

  const refreshForm = async () => {
    setTodos(await getAllToDo());
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
        />
        <TouchableOpacity
          onPress={() => newToDo(title, refreshForm)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        {todos.map((value, index) => (
          <Text style={styles.TODOText}>{value}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A2BE2",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  formContainer: {
    flexDirection: "row",
  },

  scroll: { flex: 1 },

  button: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: "#EE82EE",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
  },

  buttonText: {
    fontSize: 40,
    color: "#FFF",
  },

  TODOText: {
    fontSize: 30,
    color: "#FFF",
    paddingTop: 10,
  },

  input: {
    flex: 1,
    height: 55,
    backgroundColor: "#fff",
    fontSize: 24,
  },
});
