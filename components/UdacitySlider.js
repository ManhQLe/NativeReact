import React from'react'
import { StyleSheet, View,Text,Slider} from 'react-native'

export default function UdacitySlider ({max,unit,step,value,onChange}) {
    
    return <View style={styles.container}>
        <Slider
            step={step}
            value= {value}
            maximumValue={max}
            minimumValue = {0}
            onValueChange ={onChange}/>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        
    }
})