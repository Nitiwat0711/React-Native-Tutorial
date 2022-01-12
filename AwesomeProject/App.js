/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	RefreshControl,
	FlatList,
	TextInput,
	Touchable,
	TouchableOpacity,
} from 'react-native';


const App = () => {
	const [Items, setItems] = useState([
		{value: 'Item 1'},
		{value: 'Item 2'},
		{value: 'Item 3'},
		{value: 'Item 4'},
		{value: 'Item 5'},
		{value: 'Item 6'},
		{value: 'Item 7'},
		{value: 'Item 8'},
	]);
	const [Refreshing, setRefreshing] = useState(false);

	const onRefreshList = () => {
		setRefreshing(true);
		setItems([...Items, {value:'Item 69 (ADD)'}]);
		setRefreshing(false);
	};
	return (
		<View style={styles.body}>
			<Text style={styles.text}>
				First Name:
			</Text>
			<TextInput style={styles.input}
			placeholder="กรอกชื่อของคุณ..."
			/>
			<Text style={styles.text}>
				Last Name:
			</Text>
			<TextInput style={styles.input}
			placeholder="กรอกนามสกุลของคุณ..."/>
			<View style={styles.center}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text}>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
		</View>

	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	text: {
		color: '#000000',
		fontSize: 20,
		marginHorizontal: 10,
		marginVertical: 4,
		fontFamily: 'IBMPlexSansThai-Regular',
	},
	input: {
		borderWidth: 2,
		borderBottomWidth: 4,
		borderRightWidth: 3,
		borderRadius: 12,
		marginHorizontal: 10,
		marginVertical: 5,
		borderColor: '#5683FF',
		fontSize: 20,
		fontFamily: 'IBMPlexSansThai-Regular',
		paddingHorizontal: 15,
	},
	button: {
		marginHorizontal: 10,
		marginTop: 8,
		fontSize: 20,
		fontFamily: 'IBMPlexSansThai-Regular',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: 100,
		borderRadius: 12,
		borderWidth: 2,
	},
	center: {
		alignItems: 'flex-end',
	},
});

export default App;
