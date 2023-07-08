import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams, Stack } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const { name, userName } = useSearchParams();

  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: userName,
          headerTintColor: "#ffe030",
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Text>
        Profile of {name} (@{userName})
      </Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default Profile;
