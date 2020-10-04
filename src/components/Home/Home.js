import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NavBar from "../NavBar";

const Home = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        <View style={styles.selfExamSection}>
          <View style={{ marginBottom: 0 }}>
            <Text h1 h1Style={styles.selfExamHeader}>
              10-minutes
            </Text>
            <Text h1 h1Style={styles.selfExamHeader}>
              Self Breast Exam
            </Text>
          </View>
          <Button
            icon={
              <Icon
                name="arrow-right"
                style={{ marginLeft: 10 }}
                size={15}
                color="white"
              />
            }
            iconRight
            title="Start Self Exam"
            buttonStyle={styles.startButton}
            titleStyle={{ fontSize: 30 }}
            onPress={() => navigation.navigate("Self Examination")}
          />
        </View>
        <TouchableOpacity
          style={styles.findDoctorsSection}
          onPress={() => navigation.navigate("Find Doctors")}
        >
          <View style={styles.findDoctorsSection}>
            <Text h1 h1Style={styles.findDoctorsHeader}>
              Find doctors in your area{" "}
              <Icon
                name="arrow-right"
                style={{ marginLeft: 10 }}
                size={15}
                color="white"
              />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.breastCancerInfoSection}
          onPress={() => navigation.navigate("Breast Cancer Info")}
        >
          <View style={styles.breastCancerInfoSection}>
            <Text h1 h1Style={styles.breastCancerInfoHeader}>
              Breast Cancer Symptoms{" "}
              <Icon
                name="arrow-right"
                style={{ marginLeft: 10 }}
                size={15}
                color="white"
              />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
  },
  selfExamSection: {
    flex: 2,
    justifyContent: "space-around",
    backgroundColor: "#ffd1f4",
  },
  findDoctorsSection: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#474747",
  },
  startButton: {
    width: "auto",
    // marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
  },
  breastCancerInfoSection: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8ac4ff",
  },
  selfExamHeader: {
    fontSize: 40,
    textAlign: "center",
  },
  findDoctorsHeader: {
    fontSize: 30,
    color: "#ffdef7",
    textAlign: "center",
  },
  breastCancerInfoHeader: {
    fontSize: 30,
    color: "#474747",
    textAlign: "center",
  },
});

export default Home;
