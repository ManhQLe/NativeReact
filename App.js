import React from 'react';
import {red} from './utils/colors'
import { 
	StyleSheet, Text, View,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Slider
	
} from 'react-native';
import AddEntry from './components/AddEntry'
import {getMetricMetaInfo} from './utils/helpers'

export default class App extends React.Component {
	state={
		value:0
	}

	pressed=()=>{

	}

	render() {
		return (
			<View style={styles.container}>
				{/* <AddEntry/>		 */}
				{/* <TouchableHighlight style={styles.btn} onPress={this.pressed} underlayColor="#f26f28">
					<Text style={styles.bntText}>Touch me</Text>
				</TouchableHighlight> */}
				<Slider value={this.state.value}
					minimumValue={0}
					maximumValue={10}
					step={1}
					onValueChange={(v)=>this.setState({value:v})}
				/>
				<Text>{this.state.value}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2ecc71',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	btn:{
		backgroundColor:red,
		padding:18,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:5,
	},
	bntText:{
		color:"#fff"
	}
});
