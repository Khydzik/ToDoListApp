import React, { Component } from 'react';
import AddToDoList from './AddToDoList';
import TaskList from './TaskList';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>ToDo List App</Text>
        <TaskList />
        <AddToDoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    width: 200,
    height: 50,
    marginTop: 30,
    textAlign: 'center',
    color: '#696969',
    fontWeight: '600'
  }
});
