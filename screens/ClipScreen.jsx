import React from "react";
import { Button, Text, View } from "react-native";

export const ClipScreen = () => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>ClipPage</Text>
    </View>
  );
};
