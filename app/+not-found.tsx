import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <View>
        <Stack.Screen options={{ title: "Oops!" }} />
        <View className="flex-1 items-center justify-center">
          <Text>there's no such screen</Text>
        </View>
      </View>
    </>
  );
}
