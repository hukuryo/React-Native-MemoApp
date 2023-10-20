import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { NewMemoScreen } from "./screens/NewMemoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const MemoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { width: 100 },
          tabBarItemStyle: { marginTop: 100 },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={MemoStack}
          options={{ headerShown: false, title: "HOME" }}
        />
        <Tab.Screen
          name="NewMemoScreen"
          component={NewMemoScreen}
          options={{ headerShown: false, title: "NEW" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
