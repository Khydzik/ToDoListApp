import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import TaskItem from './TaskItem';
import * as actions from '../Actions/action';
import { connect } from 'react-redux';

class TaskList extends React.Component {

  componentDidMount() {
    this.props.getTasks()
}

  render() {
    return(
      <FlatList
        style={{ alignSelf: 'stretch' }}
        data={this.props.todos}
        renderItem={({item}) => (
          <TaskItem
            text={item.name}
            completed={item.isDone}
            deleteTodo={() => this.props.deleteTask(item.id)}
            completeTodo={() => this.props.completeTask(item.id)}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: id => dispatch(actions.deleteTask(id)),
    completeTask: id => dispatch(actions.updateTask(id)),
    getTasks: () => dispatch(actions.getTasks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
