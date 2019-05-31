import React from 'react';
import * as actions from '../Actions/action';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';

class AddToDoList extends React.Component {
  state = { inputText: '' };

  onClickButtonAdd = () => {
    this.props.addTask({
      text: this.state.inputText,
      id: Math.random() * 100
    });

    this.setState({ inputText: '' });
  };

  onChangeHandler = text => {
    this.setState({ inputText: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.inputText}
          onChangeText={this.onChangeHandler}
        />
        <TouchableOpacity style={styles.addButton} onPress={this.onClickButtonAdd}>
          <Text style={styles.btnText}>Add to tasks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: item => dispatch(actions.addTodo(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddToDoList);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 20
  },
  addButton: {
    backgroundColor: '#808080',
    borderRadius: 5,
    borderWidth: 1,
    textAlignVertical: 'center',
    alignSelf: 'stretch',
    color: '#696969',
    fontWeight: '600',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    height: 60,
    width: 300,
    textAlignVertical: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: '#ccc',
    marginBottom: 20
  },
  btnText: {
    textAlign: 'center',
    fontSize: 28
  }
});
