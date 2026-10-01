import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.sub}>Ahmed Hassan</Text>
      <Text style={styles.sub}>Roll No: 23I-3057</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 12 },
  sub: { fontSize: 18, color: "#333" },
});
