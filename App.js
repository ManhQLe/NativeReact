import React from 'react';
import {red,white, purple} from './utils/colors'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import History from './components/history'
import EntryDetail from './components/EntryDetail'
import { 
	StyleSheet,  View, Platform,
	
} from 'react-native';
import {TabNavigator ,StackNavigator} from 'react-navigation'
import AddEntry from './components/AddEntry'
import {getMetricMetaInfo} from './utils/helpers'
import {FontAwesome,Ionicons} from '@expo/vector-icons'

const Tabs = TabNavigator({
	History:{
		screen:History,
		navigationOptions:{
			tabBarLabel:'History',
			tabBarIcon:({tintColor})=><Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
		}
	},
	AddEntry:{
		screen:AddEntry,
		navigationOptions:{
			tabBarLabel:'Add Entry',
			tabBarIcon:({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor}/>
		}
	}
}, 
{
	navigationOptions:{
		header:null
	}

},
{
	tabBarOptions:{
		activeTintColor: Platform.OS==='ios' ? purple:white,
		style:{
			height:56,
			backgroundColor:Platform.OS=== 'ios'?white:purple,
			shadowColor:'rgba(0,0,0,0.25)',
			shadowOffset:{
				width:0,
				height:3
			},
			shadowRadius:6,
			shadowOpacity:1
		}
	}

})

const MainNavigator = StackNavigator({
	Home:{
		screen:Tabs,

	},
	AddDetail:{
		screen:EntryDetail,
		navigationOptions:{
			headerTintColor:white,
			headerStyle:{
				backgroundColor:purple
			}			
		}
	},

})

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={styles.container}>
					<View style={{height:20}}/>
					<Tabs/>				
					
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
