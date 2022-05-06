import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Location, Notification } from '../../../assets'
import Gap from '../Gap'
const HomeF_Header = () => {
  return (
    <View style={styles.container}>
            <View style={{backgroundColor: 'white'}}>
                <Text style={styles.greeting}>Hi Erick,</Text>
                <Text style={styles.welcome}>Welcome Back!</Text>
                <View style={styles.styleLocation}>
                    <Location/>
                    <Text style={styles.unklab}>Universitas Klabat</Text>      
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.borderNotif}>
                    <Notification style={styles.notif}/>
                </View>
            </TouchableOpacity>
            <View style={styles.borderNotif}>
                <Notification style={styles.notif}/>
            </View>
    </View>
  )
}

export default HomeF_Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', 
        height: 143,
        paddingTop: 56,
        paddingLeft: 34,
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: 'Segoe UI',
        fontSize: 13,
        color: '#000000'
    },
    borderNotif: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: '#EDF5F7',
        marginLeft: 107,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleLocation: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcome: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 20,
        color: '#000000'
    },
    unklab: {
        fontFamily: 'Segoe UI',
        fontSize: 13,
        color: '#000000',
        marginLeft: 1
        
    }
})