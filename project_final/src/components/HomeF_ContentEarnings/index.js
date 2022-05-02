import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { ToDoList, JobSeeker, History } from '../../../assets'

const HomeF_ContentEarnings = () => {
  return (
    <View style={styles.contentEarnings}>
               <View style={{alignSelf: 'center'}}>
                    <View style={styles.content}>
                        <Gap height={10}/>
                        <Text style={styles.earnings}>Earnings</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rp 12.500.000</Text>
                        <Gap height={17} />
                        <View style={styles.TPP}>
                            <View style={styles.iconStyle}>
                                <View style={styles.iconWrapper}>
                                    <ToDoList/>
                                </View>
                            </View>
                            {/* <Gap width={24} /> */}
                            <View style={styles.iconStyle}>
                                <View style={styles.iconWrapper}>
                                    <JobSeeker/>
                                </View>
                            </View>
                            {/* <Gap width={28} /> */}
                            <View style={styles.iconStyle}>
                                <View style={styles.iconWrapper}>
                                    <History/>
                                </View>
                                
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
                            <Text style={{paddingLeft: 30}}>To do List</Text>
                            <Text style={{paddingLeft: 28}}>Projects</Text>
                            <Text style={{paddingLeft: 34}}>Projects</Text>
                        </View>
                        <Gap height={17} />
                        <View style={styles.progressWrapper}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.totalProgress}>25</Text>
                                <Text style={styles.deskripsiProgress}>Complete</Text>
                            </View>
                            <View style={styles.lineVertical}/>
                            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 14}}>
                                <Text style={styles.totalProgress}>25</Text>
                                <Text style={styles.deskripsiProgress}>All Projects</Text>
                            </View>
                            <View style={styles.lineVertical}/>
                            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 17}}>
                                <Text style={styles.totalProgress}>25</Text>
                                <Text style={styles.deskripsiProgress}>In Complete</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
  )
}

export default HomeF_ContentEarnings

const styles = StyleSheet.create({
    contentEarnings: {
        backgroundColor: 'white', 
        height: 229, 
        justifyContent: 'center',
        marginTop: 8
    },
    content: {
        height:216, 
        width: 292, 
        backgroundColor: '#D2F5FD', 
        borderRadius: 20, 
        flexDirection: 'column', 
        alignItems: 'center'
    },
    iconWrapper: {
        width: 40, 
        height: 40, 
        backgroundColor: 'white', 
        borderRadius: 40, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconStyle: {
        flexDirection: 'column', 
        alignItems: 'center'
    },
    earnings: {
        fontSize: 11,
        fontFamily: 'Segoe UI'
    },
    TPP: {
        flexDirection: 'row', 
        width: 210, 
        justifyContent: 'space-between',
    },
    progressWrapper: {
        height: 61, 
        width: 252, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 10, 
        flexDirection: 'row', 
        paddingHorizontal: 14
    },
    totalProgress: {
        fontWeight: 'bold', 
        fontSize: 16
    },
    deskripsiProgress: {
        fontWeight: 'bold', 
        fontSize: 11
    },
    lineVertical: {
        height: 41, 
        width: 1, 
        marginLeft: 13, 
        backgroundColor: '#C0C0C0', 
        marginTop: 8
    }
})