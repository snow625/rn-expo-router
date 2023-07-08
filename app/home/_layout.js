import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
          title: "Feed",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color={color} />,
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="envelope" size={24} color={color} />,
          title: "Messages",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
