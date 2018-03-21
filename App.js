import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      result: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Simple Add with Numeric input keyboards</Text>
        <TextInput keyboardType={"numeric"} style={{ width: 100 }} value={this.state.input1} onChangeText={(e) => this.setState({ input1: e })} />
        <TextInput keyboardType={"numeric"} style={{ width: 100 }} value={this.state.input2} onChangeText={(e) => this.setState({ input2: e })} />
        <Button onPress={() => this.setState({ result: Number(this.state.input1) + Number(this.state.input2) })} title="Calculate" />
        <Text>Result : {this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
