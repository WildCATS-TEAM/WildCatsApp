import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import NavBar from "../NavBar";

const Discharge = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title}>Nipple Discharge</Text>
        <Text style={styles.paragraph}>
            It is possible to express a bit a fluid from the nipples of most women regardless of age. The fluid is usually milky, green, or brown. This is normal and not a sign of cancer. There are some specific types of nipple discharge that warrant closer evaluation:
        </Text>
        <View style={styles.bullets}>
            <Text style={styles.bullet}>
                {'\u2022'}Discharge that is bloody or clear-yellow, that occurs all by itself (e.g. it stains your clothes), and that comes from only one duct is considered a “pathologic” discharge that requires further assessment.  This type of discharge is usually caused by a benign polyp in a large milk duct just deep to the nipple.  When it occurs in older women it can be a sign of cancer.
            </Text>
            <Text style={styles.bullet}>
                {'\u2022'}Copious milky discharge from both nipples can be a sign of pregnancy, but it can also be caused by a benign tumor in the pituitary gland (prolactinoma).
            </Text>
        </View>
        <Text style={styles.title}>
            {"\n"}
            How do I know when to see a breast specialist?        
        </Text>
        <Text style={styles.paragraph}>
            Generally, any discharge that occurs all by itself in a woman who is not pregnant should be evaluated by a breast specialist.        </Text>
        <Text style={styles.title}>
            {"\n"}
            How will I be evaluated for nipple discharge?        </Text>
        <Text style={styles.paragraph}>
            Your physician will give you a clinical breast exam, ask about your personal medical history, and probably order a mammogram and ultrasound to look for the source of the discharge. Ultrasound is very useful at evaluating causes of nipple discharge. Your physician may also order a ductogram, which involves instillation of dye into the discharging duct to visualize the interior. In some cases, a biopsy will be performed. For patients who are not pregnant but do have a copious milky discharge from both breasts, blood will be drawn to measure prolactin levels.
            {"\n"}{"\n"}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: 200,
  },
  ScrollView: {
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
  },
  title: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 25,
      marginLeft: 25,
      marginRight: 25,
      fontWeight: "bold",
  },
  paragraph: {
      fontSize: 18,
      lineHeight: 30,
      width: 350,
      textAlign: "justify",
  },
  bullets: {
      width: 350,
  },
  bullet: {
      fontSize: 16,
      marginTop: 10,
      lineHeight: 30,
      textAlign: "justify",
  },
  image: {
      height: 230,
      width: 350,
      resizeMode: "contain",
  }
});

export default Discharge;
