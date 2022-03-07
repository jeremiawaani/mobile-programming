import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
    };
  }
  render() {
    return (
      <View>
        {/* StatusBar */}
        <StatusBar barStyle="light-content" backgroundColor="#0097A7" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTextTop}>Header</Text>
          <Text style={styles.headerTextDown}>
            {/* Disini akan menerima InputText tadi dan ditampilkan ke screen Header */}
            {this.state.header}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerTextTop: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTextDown: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
