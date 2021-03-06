import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

import HomeScreen from "./src/components/Home";
import SelfExamScreen from "./src/components/SelfExam";
import FindDoctorsScreen from "./src/components/FindDoctors";
import BreastCancerInfoScreen from "./src/components/BreastCancerInfo";
import Dimpling from "./src/components/BreastCancerInfo/Dimpling";
import Puckering from "./src/components/BreastCancerInfo/Puckering";
import Discharge from "./src/components/BreastCancerInfo/Discharge";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Self Examination"
          component={SelfExamScreen}
          option={{ title: "Self Examination" }}
        />
        <Stack.Screen name="Find Doctors" component={FindDoctorsScreen} />
        <Stack.Screen
          name="Breast Cancer Info"
          component={BreastCancerInfoScreen}
        />
        <Stack.Screen name="Dimpling" component={Dimpling} />
        <Stack.Screen name="Puckering" component={Puckering} />
        <Stack.Screen name="Discharge" component={Discharge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
