import { Stack, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Alert } from "react-native";

export default Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#ffe030" },
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Entypo
              onPress={() => router.push("/modal")}
              name="info-with-circle"
              size={22}
              color="red"
            />
          ),
        }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};
