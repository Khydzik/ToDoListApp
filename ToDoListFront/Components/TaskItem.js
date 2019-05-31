import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from 'react-native';

export default class TaskItem extends Component {
/*   
  showErr = (
    this.state.error ?
    <Text>
      {this.state.error}
    </Text> :
    <View></View>
  ); */
 

  render() {
    const completedClasses = this.props.completed
      ? styles.completed
      : styles.uncompleted;

    const classes = [styles.text, completedClasses];

    return (
      <View style={styles.container}>
        <CheckBox
          onValueChange={this.props.completeTodo}
          value={this.props.completed}
        />
        <Text style={classes}>{this.props.text}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={this.props.deleteTodo}
        >
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#696969',
    fontWeight: '500'
  },
  completed: {
    textDecorationLine: 'line-through'
  },
  uncompleted: {
    textDecorationLine: 'none'
  },
  deleteButton: {
    fontSize: 28,
    backgroundColor: '#808080',
    width: 40,
    height: 40,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#696969',
    fontWeight: '600'
  }
});
