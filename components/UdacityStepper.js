import React from 'react'

import { View, Text, TouchableOpacity,StyleSheet,Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import {white,gray,purple} from '../utils/colors'

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    iosBtn:{
        backgroundColor:white,
        borderColor:purple,
        borderWidth:1,
        borderRadius:3,
        padding:5,
        paddingLeft:25,
        paddingRight:25
    },

    androidBtn:{
        backgroundColor:purple,
        borderRadius:2,
        margin:5,
        padding:10
    },

    removeRightGap:{
        borderTopRightRadius:0,
        borderBottomRightRadius:0
    },
    removeLeftGap:{
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        borderLeftWidth:0
    },
    metricCenter:{
        width:65,
        justifyContent:'center',
        alignItems:'center'
    },
    textValue:{
        fontSize:24,
        textAlign:'center'
    },
    textUnit:{
        fontSize:18,
        textAlign:'center',
        color:gray
    }
})


const isIOS = Platform.OS==='ios'

export default function UdacityStepper({ max, unit, step, value, onIncrement, onDecrement }) {
    return <View style={[styles.row,{justifyContent:'space-between'}]}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                style={[isIOS? styles.iosBtn: styles.androidBtn,styles.removeRightGap]}
                onPress={onDecrement}>
                {
                    isIOS
                    ?<FontAwesome name='minus' size={30} color={purple} />
                    :<Entypo name='minus'size={30} color={white}/>
                }
            </TouchableOpacity>
            <TouchableOpacity 
                style={[isIOS? styles.iosBtn: styles.androidBtn,styles.removeLeftGap]}
                onPress={onIncrement}>
                {
                    isIOS
                    ?<FontAwesome name='plus' size={30} color={purple} />
                    :<Entypo name='plus'size={30} color={white}/>
                }
            </TouchableOpacity>
        </View>
        <View style={styles.metricCenter}>
            <Text style={styles.textValue}>{value}</Text>
            <Text style={styles.textUnit}>{unit}</Text>
        </View>
    </View>
}