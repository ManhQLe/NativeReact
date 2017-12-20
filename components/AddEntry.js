import React,{Component} from 'react'
import {View,Text, TouchableHighlight} from 'react-native'
import {getMetricMetaInfo, timeToString} from '../utils/helpers'
import UdacitySlider from './UdacitySlider'
import UdacityStepper from './UdacityStepper'
import DateHeader from './DateHeader'

function SubmitBtn({onPress}){
    return <TouchableHighlight onPress={onPress}>
            <Text>Submit</Text>
        </TouchableHighlight>
}

export default class AddEntry extends Component{
    state={
        run:0,
        bike:0,
        swim:0,
        sleep:0,
        eat:0
    }

    increment= (metric)=>{
        const {max,step} = getMetricMetaInfo(metric);
        this.setState(state=>{
            const count = state[metric] + step;
            return {                
                [metric]:Math.max(count,max)
            }            
        })
    }
    decrement= (metric)=>{
        const {step} = getMetricMetaInfo(metric);
        this.setState(state=>{
            const count = state[metric] - step;
            return {                
                [metric]:Math.max(count,0)
            }            
        })
    }

    slice = (metric,value) =>{
        this.setState({
            [metric]: value
        })
    }

    submit = ()=>{
        const key = timeToString();
        const entry = this.state;

        this.setState({
            run:0,
            bike:0,
            swim:0,
            sleep:0,
            eat:0
        });

        // Update redux

        //Navigate to home

    }

    render(){
        const metaInfo = getMetricMetaInfo();
        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()}/>
                {
                    Object.keys(metaInfo).map(key=>{
                        const {getIcon,type,...rest} = getMetricMetaInfo(key);
                        const value = this.state[key]
                        return <View key={key}>
                            {getIcon()}
                            {
                                type==='slider'
                                ?<UdacitySlider value={value} onchange={(v)=>this.slide(key,value)}/>
                                :<UdacityStepper value={value} 
                                    onIncrement={v=>this.increment(key)}
                                    onDecrement={v=>this.decrement(key)}
                                />                                
                            } 
                        </View>
                        
                    })

                }
                <SubmitBtn onPress={this.submit}/>
            </View>
        )
    }
}

