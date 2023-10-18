import React from "react";
import { Button, Text, View } from "react-native";

export const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Clip" onPress={() => navigation.navigate("Clip")} />
      <Text>Detail</Text>
    </View>
  );
};
