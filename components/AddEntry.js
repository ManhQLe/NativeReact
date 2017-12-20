import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {getMetricMetaInfo} from '../utils/helpers'
import UdacitySlider from './UdacitySlider'
import UdacityStepper from './UdacityStepper'

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

    render(){
        const metaInfo = getMetricMetaInfo();
        return (
            <View>
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
            </View>
        )
    }
}

