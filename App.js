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


	render() {
		return (
			<View style={styles.container}>
				<AddEntry/>		
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
