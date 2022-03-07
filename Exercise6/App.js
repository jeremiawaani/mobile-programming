import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, TextInput } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
        };
    }
    render() {
        return ( <
            View > { /* StatusBar */ } <
            StatusBar barStyle = "light-content"
            backgroundColor = "#0097A7" / >

            { /* Header */ } <
            View style = { styles.header } >
            <
            Text style = { styles.headerTextTop } > Header < /Text> <
            Text style = { styles.headerTextDown } > { /* Disini akan menerima InputText tadi dan ditampilkan ke screen Header */ } { this.state.header } <
            /Text> <
            /View>

            { /* TextInput */ } <
            TextInput value = { this.state.header }
            style = { styles.textInput }
            placeholder = "Write something here to pass to header"
            placeholderTextColor = { '#FFFFFF' }
            //Ketika user memberikan input, maka state akan disimpan di property 'header'
            onChangeText = { value => this.setState({ header: value }) }
            /> <
            /View>
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
});
export default App;