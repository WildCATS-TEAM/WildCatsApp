import React from "react";
import { StyleSheet, Text, View} from "react-native";
import NavBar from "../NavBar";
import Dimpling from "./Dimpling";
import Puckering from "./Puckering";
import Discharge from "./Discharge";
import { TouchableOpacity } from "react-native-gesture-handler";

const BreastCancerInfo = ({ navigation }) => {
  return (
    <>
      <NavBar />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Dimpling")} style={styles.button}>
          <Text style={styles.buttonText}>Dimpling</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Puckering")} style={styles.button}>
          <Text style={styles.buttonText}>Puckering</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Discharge")} style={styles.button}>
          <Text style={styles.buttonText}>Discharge</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: "relative",
    top: 150,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#8ac4ff",
    width: 350,
    height: 100,
    alignSelf: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    position: "relative",
    top: 25,
    fontSize: 35,
    textAlign: "center",
    color: "white",
  },
});

export default BreastCancerInfo;

