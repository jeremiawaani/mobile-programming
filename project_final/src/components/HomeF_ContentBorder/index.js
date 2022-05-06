import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Gap from '../Gap'

const HomeF_ContentBorder = ({color='#D1FBEA', title, totJobs, icons}) => {
  return (
    <View style={styles.borderJobCat(color)}>
        <View style={styles.borderIcon}>
            {icons}
        </View>
        <Gap height={8}/>
        <Text style={styles.deskripsiJobCat}>{title}</Text>
        <Text style={styles.totJobsCat}>{totJobs}</Text>
        <Gap height={10}/>
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.btnView}>
             <Text style={styles.btnText}>View</Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}

export default HomeF_ContentBorder

const styles = StyleSheet.create({
    borderJobCat: (color) => ({
        height: 115, 
        width: 90, 
        backgroundColor: color, 
        borderRadius: 10
    }),
    borderIcon: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginLeft: 11,
    },
    deskripsiJobCat: {
        fontFamily: 'Segoe UI',
        fontSize: 10,
        marginLeft: 12,
        color: '#000000'
    },
    totJobsCat: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 12,
        marginLeft: 12,
        color: '#000000'
    },
    btnView: {
        width: 57,
        height: 19,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 11,
        color: '#000000'
    }
})