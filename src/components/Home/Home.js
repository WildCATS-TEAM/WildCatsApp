import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button
          title="Start Self Exam"
          onPress={() => navigation.navigate("Self Examination")}
        />
        <Button
          title="Find Doctors"
          onPress={() => navigation.navigate("Find Doctors")}
        />
        <Button
          title="Breast Cancer Symptoms"
          onPress={() => navigation.navigate("Breast Cancer Info")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
