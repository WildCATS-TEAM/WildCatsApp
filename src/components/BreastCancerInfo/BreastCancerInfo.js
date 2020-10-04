import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "../NavBar";

const BreastCancerInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />

      <Text>Breast Cancer Info Screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default BreastCancerInfo;
