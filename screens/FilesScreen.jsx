import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

export const FilesScreen = () => {
  return (
    <SafeAreaView>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>ClipPage</Text>
    </SafeAreaView>
  );
};
