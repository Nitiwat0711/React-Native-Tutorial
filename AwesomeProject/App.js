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
			<FlatList
				keyExtractor={(item, index) => index.toString()}
				data={Items}
				renderItem={({item}) => (
					<View style={styles.item} key={item.key}>
						<Text style={styles.text}>{item.value}</Text>
					</View>
				)}
				refreshControl={
					<RefreshControl
					refreshing={Refreshing}
					onRefresh={onRefreshList}
				/>}
			/>
			{/* <ScrollView
			refreshControl={
				<RefreshControl
				refreshing={Refreshing}
				onRefresh={onRefreshList}
			/>
			}
			>
			{
				Items.map((item) => {
					return (
						<View key={item.key} style={styles.item}>
							<Text style={styles.text}>{item.value}</Text>
						</View>
					);
				})
			}
			</ScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},
	item: {
		backgroundColor: '#4ae1fa',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	text: {
		color: '#000000',
		fontSize: 35,
		margin: 10,
		fontFamily: 'IBMPlexSansThai-Regular',
	},
});

export default App;
