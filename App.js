import React from 'react';
import {red} from './utils/colors'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import History from './components/history'
import { 
	StyleSheet,  View
	
} from 'react-native';
import AddEntry from './components/AddEntry'
import {getMetricMetaInfo} from './utils/helpers'

export default class App extends React.Component {


	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={styles.container}>
					<View style={{height:20}}/>
					<History/>					
					{/* <AddEntry/>		 */}
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	}
	
});
