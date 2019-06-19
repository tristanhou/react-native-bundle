/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TextModule from './App2'

type Props = {};
export default class App extends Component<Props> {
	// event
	componentDidMount(){
		global.index1Param = '我在index.bundle中，如果你在index2.bundle中看到我，说明我们处于同一个 jscontext 下';
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>index</Text>
				<Text>-------------------- 华丽的分割线 -------------------</Text>
				<TextModule></TextModule>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});
