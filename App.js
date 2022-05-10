//! BAGIAN ERICK
import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
//!BAGIAN ERICK

//! BAGIAN AGUNG
// Declaring function with props
const User = (props) => {
  return (
    //Di dalam ini terdapat beberapa argumen yang telah di passing menggunakan props
    <View style={styles.functionUser}>
      <Text style={{}}>
        Name = {props.name}, Age = {props.age}, Desc = {props.desc}
      </Text>
    </View>
  );
};
//! BAGIAN AGUNG

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: true,
      header: "",
    };
  }

  render() {
    return (
      <View>
        {/* BAGIAN ERICK */}
        {/* StatusBar */}
        <StatusBar barStyle="light-content" backgroundColor="#0097A7" />
        {/* BAGIAN ERICK */}

        {/* BAGIAN LOMO */}
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTextTop}>Header</Text>
          <Text style={styles.headerTextDown}>
            {/* Disini akan menerima InputText tadi dan ditampilkan ke screen Header */}
            {this.state.header}
          </Text>
        </View>
        {/* BAGIAN LOMO */}

        {/* BAGIAN ERICK */}
        {/* Content */}
        <Content />
        {/* BAGIAN ERICK */}

        {/* BAGIAN ANDRE */}
        {/* TextInput */}
        <TextInput
          value={this.state.header}
          style={styles.textInput}
          placeholder="Write something here to pass to header"
          placeholderTextColor={"#FFFFFF"}
          //Ketika user memberikan input, maka state akan disimpan di property 'header'
          onChangeText={(value) => this.setState({ header: value })}
        />
        {/* BAGIAN ANDRE */}

        {/* BAGIAN LOMO */}
        {/* ButtonClick */}
        <View style={{ marginLeft: 150, marginRight: 150 }}>
          <Button
            title="Click Me!"
            color={"#00BCD4"}
            // onPress={() => console.log('hello')}
          />
        </View>
        {/* BAGIAN LOMO */}

        {/* AGUNG P BAGIAN */}
        {/* Props */}
        <User name="Wahyu Agung" age={20} desc="Tincep" />
        <User name="Erick" age={21} desc="Pateten" />
        <User name="Salomo Mandagi" age={20} desc="Aertembaga" />
        <User name="Jeremia Andreas Waani" age={20} desc="Girian" />
        <User name="Gerald Wuysang" age={20} desc="Rap-rap" />
        {/* AGUNG P BAGIAN */}

        {/* BAGIAN ANDRE */}
        {/* Footer */}
        <Footer />
        {/* BAGIAN ANDRE */}
      </View>
    );
  }
}

//! BAGIAN ERICK
//Function ini digunakan untuk menampilkan gambar secara online
const Content = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ height: 300, width: 415, resizeMode: "cover" }}
        source={{
          uri: "https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
        }}
      />
    </View>
  );
};
//! BAGIAN ERICK

//! BAGIAN ANDRE
//Function ini digunakan untuk menampilkan footer
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold", fontStyle: "italic" }}>
        Footer
      </Text>
    </View>
  );
};
//! BAGIAN ANDRE

const styles = StyleSheet.create({
  //! BAGIAN AGUNG
  functionUser: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  //! BAGIAN AGUNG

  //! BAGIAN GERAL
  header: {
    backgroundColor: "#00BCD4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerTextTop: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTextDown: {
    color: "yellow",
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: "#00BCD4",
    backgroundColor: "#00BCD4",
    color: "#FFFFFF",
  },
  footer: {
    backgroundColor: "#00BCD4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 8,
  },
  //! BAGIAN GERAL
});

export default App;
