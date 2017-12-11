import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

	componentDidMount(){
		console.log("Debug Line1")
		debugger
		console.log("Debug Line2")
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>How cool is this</Text>
				<Text>From Manh Le</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
