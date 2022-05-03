import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { Pencil, StackJob, WebShield } from '../../../assets'

const HomeF_ContentJobCat = ({color='#D1FBEA'}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: 176}}>
            <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 14, marginTop: 2, marginLeft: 36, color: '#000000'}}>Job Category</Text>
            <Gap height={15}/>
           <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.borderJobCat(color)}>
                    <View style={styles.borderIcon}>
                        <Pencil/>
                    </View>
                    <Gap height={8}/>
                    <Text style={styles.deskripsiJobCat}>Design</Text>
                    <Text style={styles.totJobsCat}>3.2K Jobs</Text>
                    <Gap height={10}/>
                    <View style={styles.btnView}>
                        <Text style={styles.btnText}>View</Text>
                    </View>
                </View>
                <Gap width={11} />
                <View style={styles.borderJobCat(color='#D2F5FD')}>
                    <View style={styles.borderIcon}>
                        <StackJob/>
                    </View>
                    <Gap height={8}/>
                    <Text style={styles.deskripsiJobCat}>Network</Text>
                    <Text style={styles.totJobsCat}>2.6K Jobs</Text>
                    <Gap height={10}/>
                    <View style={styles.btnView}>
                        <Text style={styles.btnText}>View</Text>
                    </View>
                </View>
                <Gap width={11} />
                <View style={styles.borderJobCat(color='#E2D4FE')}>
                    <View style={styles.borderIcon}>
                        <WebShield/>
                    </View>
                    <Gap height={8}/>
                    <Text style={styles.deskripsiJobCat}>Security</Text>
                    <Text style={styles.totJobsCat}>1.6K Jobs</Text>
                    <Gap height={10}/>
                    <View style={styles.btnView}>
                        <Text style={styles.btnText}>View</Text>
                    </View>
                </View>
           </View>
    </View>
  )
}

export default HomeF_ContentJobCat

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