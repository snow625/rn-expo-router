import { View, Text } from "react-native";
import { Link } from "expo-router";
const messages = () => {
  return (
    <View>
      <Link style={{ fontSize: 24, marginBottom: 15 }} href="home/messages/Lucas">
        Messages with Lucas
      </Link>
      <Link style={{ fontSize: 24, marginBottom: 15 }} href="home/messages/Alex">
        Messages with Alex
      </Link>
      <Link style={{ fontSize: 24, marginBottom: 15 }} href="home/messages/Roman">
        Messages with Roman
      </Link>
    </View>
  );
};

export default messages;
