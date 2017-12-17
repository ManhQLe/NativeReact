import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'
import {getMetricMetaInfo} from './utils/helpers'

export default class App extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<AddEntry/>
				{
					getMetricMetaInfo('bike').getIcon()
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2ecc71',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
