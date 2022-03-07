import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from 'react-native';

// Declaring function with props
const User = props => {
  return (
    //Di dalam ini terdapat beberapa argumen yang telah di passing menggunakan props
    <View style={styles.functionUser}>
      <Text style={{}}>
        Name = {props.name}, Age = {props.age}, Desc = {props.desc}
      </Text>
    </View>
  );
};
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

        {/* Content */}
        <Content />

        {/* TextInput */}
        <TextInput
          value={this.state.header}
          style={styles.textInput}
          placeholder="Write something here to pass to header"
          placeholderTextColor={'#FFFFFF'}
          //Ketika user memberikan input, maka state akan disimpan di property 'header'
          onChangeText={value => this.setState({header: value})}
        />

        <View style={{marginLeft: 150, marginRight: 150}}>
          <Button
            title="Click Me!"
            color={'#00BCD4'}
            // onPress={() => console.log('hello')}
          />
        </View>

        {/* Props */}
        <User name="Wahyu Agung" age={20} desc="Tincep" />
        <User name="Erick" age={21} desc="Pateten" />
        <User name="Salomo Mandagi" age={20} desc="Aertembaga" />
        <User name="Jeremia Waani" age={20} desc="Girian" />
        <User name="Gerald Wuysang" age={20} desc="Rap-rap" />

        <Footer />
      </View>
    );
  }
}

//Function ini digunakan untuk menampilkan gambar secara online
const Content = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: 210, width: 415, resizeMode: 'cover'}}
        source={{
          uri: 'https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80',
        }}
      />
    </View>
  );
};

//Function ini digunakan untuk menampilkan footer
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
        Footer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  functionUser: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },

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
  textInput: {
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#00BCD4',
    backgroundColor: '#00BCD4',
    color: '#FFFFFF',
  },
  footer: {
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 8,
  },
});
export default App;
