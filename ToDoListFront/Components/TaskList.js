import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import TaskItem from './TaskItem';
import * as actions from '../Actions/action';
import { connect } from 'react-redux';

class TaskList extends React.Component {

  componentDidMount() {
    this.props.fetchTasks()
}

  render() {
    return this.props.loading ? (
      <FlatList
        style={{ alignSelf: 'stretch' }}
        data={this.props.todos}
        renderItem={({ item }) => (
          <TaskItem
            text={item.text}
            completed={item.completed}
            deleteTodo={() => this.props.deleteTodo(item.id)}
            completeTodo={() => this.props.completeTodo(item.id)}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    ) : <Text>Loading...</Text>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(actions.deleteTodo(id)),
    completeTodo: id => dispatch(actions.completeTodo(id)),
    fetchTasks: () => dispatch(actions.fetchTasks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
