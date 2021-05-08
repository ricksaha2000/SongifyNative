import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import { Text, View } from "../components/Themed";
import albumCategories from "../data/albumCategories";

export default function AlbumScreen() {
	return (
		<View style={styles.container}>
			<Text>HIIIIIIII</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
