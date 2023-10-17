import React from "react";
import { Button, Text, View } from "react-native";

export const DetailScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>{itemId}</Text>
    </View>
  );
};
