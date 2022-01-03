import { StyleSheet, Text, View , LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);
const Stack = createNativeStackNavigator();

import Login from "./screens/Login";
import Request from "./screens/Request";
import SignUp from "./screens/SignUp";
import Manager from "./screens/Manager";
import Map from "./screens/Map";
import Svg from "./screens/Svg";
import BarCode from  "./screens/BarCode";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Request" component={Request} />

      <Stack.Screen name="Svg" component={Svg} />

      <Stack.Screen name="Map" component={Map} />


      <Stack.Screen name="BarCode" component={BarCode} />


      <Stack.Screen name="SignUp" component={SignUp}/>




      
<Stack.Screen name="Manager" component={Manager} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
