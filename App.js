import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import Fallback from "./src/components/Fallback";

export default function App() {
	return (
		<SafeAreaView style={{ backgroundColor: '#1e90ff', flexGrow: 1, paddingTop: 45 }}>
			<View>
			<Text style={styles.sectionTitle}>To Do List</Text>
				<TodoScreen />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: "#fff",
		paddingLeft: 15,
		marginBottom: 10
	  },
});