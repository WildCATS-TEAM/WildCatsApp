import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import NavBar from "../NavBar";

const Puckering = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title}>Breast Puckering</Text>
        <Text style={styles.paragraph}>
            During a breast self-exam, you should look for changes in the shape and size of your breasts or nipples. You should also feel for any lumps in the breasts or under your armpits.
            {"\n"}
        </Text>
        <Text style={styles.paragraph}>
            It’s important to pay attention to the appearance of your skin when doing self-exams. Changes in thickness and the skin color over your breasts could be signs of breast cancer. Make sure you’re fully assessing the breast area.
            {"\n"}
        </Text>
        <Text style={styles.paragraph}>
            If there’s skin dimpling, meaning the skin has a texture similar to an orange peel, it could be a sign of breast cancer. This is often associated with inflammatory breast cancer, a rare but aggressive form of the disease.
            There are benign reasons why the skin may look dimpled. If you notice a change, be sure to tell your doctor so you can work to find out why the change has occurred.
        </Text>
        <Text style={styles.title}>
            {"\n"}
            Uncommon Breast Cancer Symptoms
        </Text>
        <Text style={styles.title}>
            By: Women's Care Florida Staff
        </Text>
        <Text style={styles.paragraph}>
            Recently, a young woman courageously bared it all on social media to make a point about detecting breast cancer. It all started when a dimple appeared on her breast. She went to her primary care physician who sent her to a breast cancer center. After, doctors diagnosed her with breast cancer. Like many women, she knew the common signs of breast cancer such as breast lumps. However, she had no idea that we also consider dimples a warning sign. Many are unfamiliar with less common breast cancer symptoms such as dimples and nipple discharge.
        </Text>
        <Text style={styles.paragraph}>
            {"\n"}
            Here are some other uncommon symptoms to look for:
        </Text>
        <View style={styles.bullets}>
            <Text style={styles.bullet}>{'\u2022'}Breast puckering</Text>
            <Text style={styles.bullet}>{'\u2022'}Nipple discharge</Text>
            <Text style={styles.bullet}>{'\u2022'}Swelling, redness or darkening of the breast</Text>
            <Text style={styles.bullet}>{'\u2022'}Change in size or shape</Text>
            <Text style={styles.bullet}>{'\u2022'}Itchy, scaly or rash on the nipple</Text>
            <Text style={styles.bullet}>{'\u2022'}Breast pain after menopause {"\n"}</Text>
         </View>
        <Text style={styles.title}>What is Breast Puckering?</Text>
        <Text style={styles.paragraph}>
            Puckering consists of an indentation that appears when you raise your arms. It retracts when you put your arms back down. To check for uncommon breast cancer symptoms such as this, stand in front of a mirror. Then, lift your arms above the head and look for any indents that occur. If you find one, this does not necessarily mean you have breast cancer. However, make an appointment with your OB/GYN to discuss more. They will determine if it consists with early signs of breast cancer.
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
      paddingLeft: 30,
      paddingRight: 30,
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
      lineHeight: 25,
  },
  bullets: {
      width: 300,
  },
  bullet: {
      fontSize: 16,
      marginTop: 10,
      lineHeight: 30,
      paddingLeft: 50,
      alignContent: "center",
      width: 300,
      textAlign: "justify",
  },
  image: {
      height: 230,
      width: 350,
      resizeMode: "contain",
  }
});

export default Puckering;
