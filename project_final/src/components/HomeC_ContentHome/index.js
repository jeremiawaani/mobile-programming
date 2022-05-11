import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { Add, Keyboard, Monitor, Pencil, Present, ProjectList } from '../../../assets'

const HomeC_ContentHome = ({backgroundColor='#D1FBEA', marginL, icons, title, subtitle, onPress}) => {
  return (
    <View style={styles.styleContent}>
        <View style={styles.borderContent(backgroundColor)}>
            <View style={{height:128}}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.subText}>{subtitle}</Text>
                <Gap height={11}/>
                <View style={styles.styleIcon}>
                    <Monitor/>
                    <Pencil/>
                    <Keyboard/>
                </View>
            </View>
            <View style={styles.marginLeftBtn(marginL)}>
            <Gap height={28}/>
                {/* <TouchableOpacity activeOpacity={0.7} onPress={onPress}> */}
                    {icons}
                {/* </TouchableOpacity> */}
                <Gap height={14}/>
                <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                    <View style={styles.button}>
                        <Text style={styles.textBtn}>View</Text>
                    </View>
                </TouchableOpacity>
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
    },
    marginLeftBtn: (marginL) => ({
        marginLeft: marginL,
        alignItems: 'center',
    })
})