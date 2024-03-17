import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { addTodo, toggleTodo, deleteAllTodos } from './redux/todoActions';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState(store.getState().todos);

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      store.dispatch(addTodo({ id: Date.now(), text: todoText, completed: false }));
      setTodoText('');
      setTodos(store.getState().todos); // Updating the todos state after dispatching the action
    }
  };

  const handleToggleTodo = id => {
    store.dispatch(toggleTodo(id));
    // Retrieving the updated todos after dispatching the action
    const updatedTodos = store.getState().todos;
    // Updating the local todos state with the updated todos
    setTodos(updatedTodos);
  };

  const handleDeleteAllTodos = () => {
    store.dispatch(deleteAllTodos());
    // Clearing the local todos state by setting it to an empty array
    setTodos([]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.topdata}>
        <Text style={styles.mainHeading}>Task Details</Text>
        </View>

      <View style={styles.secondpart}>
        <View style={styles.header}>
       
          {todos.length > 0 && (
            <TouchableOpacity style={styles.deleteAllButton} onPress={handleDeleteAllTodos}>
              <Icon name="trash" size={20} color="red" />

            </TouchableOpacity>
          )}

        </View>


        <FlatList
          data={todos}
          renderItem={({ item }) => (

            <View style={styles.todoItem}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleToggleTodo(item.id)}
              >
                {item.completed ? (
                  <Icon name="check-circle" size={24} color="#7F56D9" />
                ) : (
                  <Icon name="circle" size={24} color="#FFFFFF" />
                )}
              </TouchableOpacity>
              <Text style={styles.todoText}>{item.text}</Text>

            </View>
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No todos found</Text>}
        />


        <View style={styles.bottomBar}>
          <Icon name="plus" size={15} color="#98A2B3" />
          <TextInput
            style={styles.input}
            onChangeText={setTodoText}
            value={todoText}
            placeholder="Add Task"
            placeholderTextColor="#ABB6C8"
            fontSize={18}
            onSubmitEditing={handleAddTodo}
          />
        </View>
      </View>
    </View>
  );

};

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}