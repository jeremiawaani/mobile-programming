import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { Add, Keyboard, Monitor, Pencil, Present, ProjectList } from '../../../assets'

const HomeC_ContentHome = ({backgroundColor='#D1FBEA'}) => {
  return (
    <View style={styles.styleContent}>
        <View style={styles.borderContent(backgroundColor)}>
            <View style={{height:128}}>
                <Text style={styles.text}>Add Job</Text>
                <Text style={styles.subText}>12 Job Complete</Text>
                <Gap height={11}/>
                <View style={styles.styleIcon}>
                    <Monitor/>
                    <Pencil/>
                    <Keyboard/>
                </View>
            </View>
            <Gap width={92}/>
            <View style={{alignItems: 'center'}}>
            <Gap height={28}/>
                <Add/>
                <Gap height={14}/>
                <View style={styles.button}>
                    <Text style={styles.textBtn}>View</Text>
                </View>
            </View>
        </View>
        <Gap height={13}/>
        <View style={styles.borderContent(backgroundColor='#D2F5FD')}>
            <View style={{height:128}}>
                <Text style={styles.text}>My Projects</Text>
                <Text style={styles.subText}>12 Projects Complete</Text>
                <Gap height={11}/>
                <View style={styles.styleIcon}>
                    <Monitor/>
                    <Pencil/>
                    <Keyboard/>
                </View>
            </View>
            <Gap width={67}/>
            <View style={{alignItems: 'center'}}>
            <Gap height={26}/>
                <ProjectList/>
                <Gap height={14}/>
                <View style={styles.button}>
                    <Text style={styles.textBtn}>View</Text>
                </View>
            </View>
        </View>
        <Gap height={13}/>
        <View style={styles.borderContent(backgroundColor='#E2D4FE')}>
            <View style={{height:128}}>
                <Text style={styles.text}>Pending Projects</Text>
                <Text style={styles.subText}>12 Pending Projects</Text>
                <Gap height={11}/>
                <View style={styles.styleIcon}>
                    <Monitor/>
                    <Pencil/>
                    <Keyboard/>
                </View>
            </View>
            <Gap width={63}/>
            <View style={{alignItems: 'center'}}>
            <Gap height={23}/>
                <Present/>
                <Gap height={14}/>
                <View style={styles.button}>
                    <Text style={styles.textBtn}>View</Text>
                </View>
            </View>
        </View>

    </View>
  )
}

export default HomeC_ContentHome

const styles = StyleSheet.create({
    styleContent: {
        marginTop: 8,
        alignItems: 'center',
    },
    borderContent: (backgroundColor) => ({
        backgroundColor: backgroundColor,
        height: 128,
        width: 293,
        borderRadius: 10,
        flexDirection: 'row'
    }),
    text: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 16,
        marginLeft: 17,
        marginTop: 27,
        color: '#000000'
    },
    subText: {
        fontFamily: 'Segoe UI',
        fontSize: 13,
        color: '#000000',
        marginLeft: 17
    },
    styleIcon: {
        flexDirection: 'row',
        height: 25,
        width: 74,
        justifyContent: 'space-between',
        marginLeft: 19
    },
    button: {
        height: 28,
        width: 65,
        backgroundColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 14,
        color: '#FFFFFF'
    }
})