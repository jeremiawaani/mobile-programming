import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#0097A7" />
      </View>
    );
  }
}

export default App;
