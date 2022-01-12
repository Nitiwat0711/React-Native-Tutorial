/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-reanimated';
import { MotiView } from 'moti';
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const LoadingIndicator = ({size})=> {
		return (
		<MotiView
			from={{
				width: size,
				height: size,
				borderRadius: size / 2,
				borderWidth: 0,
				shadowOpacity: 0.5,
			}}
			animate={{
				width: size + 20,
				height: size + 20,
				borderRadius: (size + 20) / 2,
				borderWidth: size / 10,
				shadowOpacity: 1,
			}}
			transition={{
				type: 'timing',
				duration: 1000,
				loop: true,
			}}
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				borderWidth: size / 10,
				borderColor: '#fff',
				shadowColor: '#fff',
				shadowOffset: { width: 0, height: 0 },
				shadowOpacity: 1,
				shadowRadius: 10,
			}}
		/>
	);
};

const App = () => {
	return (
		<View style={styles.body}>
			<LoadingIndicator size={100} />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#010100',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ffffff',
	},
});

export default App;
