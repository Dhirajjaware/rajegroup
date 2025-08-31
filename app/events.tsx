import { FlatList, StyleSheet, Text, View } from "react-native";

const schedule = [
  { id: "1", time: "07:30 AM", event: "Morning Aarti" },
  { id: "3", time: "07:30 PM", event: "Evening Aarti" },
];

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Daily Aarti Schedule</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.event}>{item.event}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e7",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#d35400",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e67e22",
  },
  event: {
    fontSize: 14,
    marginTop: 4,
    color: "#333",
  },
});
