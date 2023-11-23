import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
	return (
		<View style={{ alignItems: "center", backgroundColor: '#1e90ff' }}>
			<Image
				source={require("../../assets/to-do-list.png")}
				style={{ height: 300, width: 300, marginTop: 60}}
			/>
		</View>
	);
};

export default Fallback;

const styles = StyleSheet.create({});