import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";
import { uuid } from "react-native-uuid";
import Fallback from "../components/Fallback";

console.log(Date.now().toString());

const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo
  const handleAddTodo = () => {
    // sturtcure of a single todo item: id & title

    if (todo === "") {
      return; // early return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  // Handle Delete
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  // Render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          // elevation: for android
        }}
      >
        <Text
          style={{
            color: "#1e90ff",
            fontSize: 20,
            fontWeight: "800",
            flex: 1,
            paddingLeft: 10,
          }}
        >
          {item.title}
        </Text>

        <IconButton
          style={{ paddingLeft: 1 }}
          icon="pencil"
          iconColor="#1e90ff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#1e90ff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16, marginTop: 3 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a new task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleUpdateTodo()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="save"
              size={20}
              color="#1e90ff"
              style={{ marginRight: 8 }}
            />
            <Text
              style={{ color: "#1e90ff", fontWeight: "bold", fontSize: 20 }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleAddTodo()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="plus"
              size={20}
              color="#1e90ff"
              style={{ marginRight: 8 }}
            />
            <Text
              style={{ color: "#1e90ff", fontWeight: "bold", fontSize: 20 }}
            >
              Add
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Render todo list */}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
