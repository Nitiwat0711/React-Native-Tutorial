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
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';


const App = () => {
	return (
		<View style={styles.body}>
			<LottieView style={styles.loading} source={require('./assets/83685-hubit.json')} autoPlay loop/>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#000',
	},
	loading: {
		margin: 10,
	},
});

export default App;
