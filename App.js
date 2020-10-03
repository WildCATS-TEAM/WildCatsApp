import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/components/Home";
import SelfExamScreen from "./src/components/SelfExam";
import FindDoctorsScreen from "./src/components/FindDoctors";
import BreastCancerInfoScreen from "./src/components/BreastCancerInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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
