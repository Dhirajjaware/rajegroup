import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Link href="events" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📅 Event Schedule</Text>
          <Text style={styles.cardText}>
            Check daily aarti timings & puja schedule
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="notifications" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>🔔 Notifications</Text>
          <Text style={styles.cardText}>Get reminders for aarti & events</Text>
        </TouchableOpacity>
      </Link>

      <Link href="gallery" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>🖼️ Gallery</Text>
          <Text style={styles.cardText}>
            View photos & videos of celebrations
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="announcements" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📢 Announcements</Text>
          <Text style={styles.cardText}>Stay updated with latest news</Text>
        </TouchableOpacity>
      </Link>

      <Link href="members" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>👥 Members</Text>
          <Text style={styles.cardText}>See member list & contact details</Text>
        </TouchableOpacity>
      </Link>

      <Link href="chat" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>💬 Chat</Text>
          <Text style={styles.cardText}>Join group discussions</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff8e7",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#d35400",
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
});
