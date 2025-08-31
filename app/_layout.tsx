import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ff9933" }, // saffron theme
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 28 },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="index" options={{ title: "🚩राजे ग्रुप 🚩" }} />
      </Stack>
    </>
  );
}
