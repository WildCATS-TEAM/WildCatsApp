import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "../NavBar";

const FindDoctors = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />
      <Text>Find Doctors Screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default FindDoctors;
