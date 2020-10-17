import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import NavBar from "../NavBar";

const Dimpling = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title}>Checking Your Breasts for Skin Dimpling</Text>
        <Text style={styles.paragraph}>
            During a breast self-exam, you should look for changes in the shape and size of your breasts or nipples. You should also feel for any lumps in the breasts or under your armpits.
            {"\n"}{"\n"}
            It’s important to pay attention to the appearance of your skin when doing self-exams. Changes in thickness and the skin color over your breasts could be signs of breast cancer. Make sure you’re fully assessing the breast area.
            {"\n"}{"\n"}
            If there’s skin dimpling, meaning the skin has a texture similar to an orange peel, it could be a sign of breast cancer. This is often associated with inflammatory breast cancer, a rare but aggressive form of the disease.
            {"\n"}{"\n"}
            There are benign reasons why the skin may look dimpled. If you notice a change, be sure to tell your doctor so you can work to find out why the change has occurred.    
            {"\n"}
        </Text>
        <Text style={styles.title}> What causes skin dimpling?</Text>
        <Text style={styles.paragraph}>
            A condition called fat necrosis is unrelated to breast cancer and can also cause dimpled skin. Sometimes, fatty tissue in the breast can become damaged and die.
            {"\n"}{"\n"}
            This may result in a lump that could be mistaken for a tumor. If the fat necrosis develops near the surface, it may make the skin surface look pitted or dimpled.
            {"\n"}{"\n"}
            Fat necrosis isn’t a precursor to cancer, but its symptoms still warrant evaluation. A needle biopsy of the lump can help confirm if it’s cancerous or not. Fat necrosis doesn’t raise the risk of breast cancer.
            {"\n"}{"\n"}    
            Dimpled skin is a common sign of inflammatory breast cancer, which draws its name from an inflamed appearance. This form of cancer results in the blockage of lymph vessels in the skin.
            {"\n"}{"\n"}
            These vessels transport lymph, a fluid that helps carry particles and excess fluid, from tissue throughout the body to the bloodstream. The lymph system also supports the body’s immune system.
            {"\n"}{"\n"}
            Inflammatory breast cancer accounts for 1 to 5 percentTrusted Source of all diagnoses of breast cancers in the United States. This cancer tends to develop in the cells of the milk ducts. Inflammatory breast cancer is also more likely to appear in women younger than 60.
            {"\n"}
        </Text>
        <Text style={styles.title}> What does skin dimpling look like?</Text>
        <Image style={styles.image} source={{uri:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-4/Breat_Cancer-.jpg?w=1155'}}/>
        <Text style={styles.title}>
            {"\n"}
            What are the symptoms of inflammatory breast cancer?
        </Text>
        <Text style={styles.paragraph}>
        If your skin dimpling is caused by inflammatory breast cancer, you may have the following symptoms:
        </Text>
        <View style={styles.bullets}>
            <Text style={styles.bullet}>
            {'\u2022'}The affected breast may swell and feel warm.
            </Text>
            <Text style={styles.bullet}>
            {'\u2022'}The affected breast may be especially tender.
            </Text>
            <Text style={styles.bullet}>
            {'\u2022'}You may feel pain in the affected breast.
            </Text>
            <Text style={styles.bullet}>
            {'\u2022'}You may feel a burning sensation in the affected breast.
            </Text>
        </View>
        <Text style={styles.paragraph}>
        The affected area often covers about one-third of the breast in inflammatory breast cancer. This can vary depending on the person. If you see dimpled skin on both breasts, it’s unlikely that the cause is cancer.
        {"\n"}{"\n"}
        In general, if you notice this change in texture on one side or changes to the color, you should see your doctor. Changes to color include a reddish or darkened appearance.
        {"\n"}{"\n"}
        The dimpled skin may also itch. You may or may not feel a tumor or lump underneath the skin.
        </Text>
        <Text style={styles.title}>
            {"\n"}What happens next?
        </Text>
        <Text style={styles.paragraph}>
            Sometimes, the symptoms of inflammatory breast cancer can be confused with a breast infection called mastitis. Mastitis is common in women with a child who breastfeeds.
            {"\n"}
        </Text>
        <Text style={styles.paragraph}>
            It’s more likely that the cause is inflammatory breast cancer if:
        </Text>
        <View style={styles.bullets}>
            <Text style={styles.bullet}>{'\u2022'}Your symptoms linger after treatment with antibiotics</Text>
            <Text style={styles.bullet}>{'\u2022'}Your symptoms worsen rapidly</Text>
            <Text style={styles.bullet}>{'\u2022'}You aren’t breastfeeding
            {"\n"}
            </Text>
        </View>
        <Text style={styles.paragraph}>
            Inflammatory breast cancer can be difficult to diagnose. That’s because there often isn’t a lump to examine. Women with inflammatory breast cancer often have dense breasts, which can make it difficult to see signs of cancer on a mammogram.
            {"\n"}{"\n"}
            A breast biopsy is needed to confirm the diagnosis of cancer. Other screening tests may be ordered in addition to a diagnostic mammogram.
            {"\n"}{"\n"}
            These tests may include an ultrasound of the breast, a CT scan, and a bone scan. This can help your doctor determine whether the cancer has spread.
        </Text>
        <Text style={styles.title}>
            {"\n"}The Takeaway
        </Text>
        <Text style={styles.paragraph}>
            Like many breast cancers, the odds of survival improve dramatically if inflammatory breast cancer is diagnosed and treated early. Delays in diagnosing inflammatory breast cancer can be especially dangerous because it can grow and spread so quickly.
            {"\n"}{"\n"}
            That’s why it’s important to have regular breast exams and promptly tell your doctor about any changes, such as skin dimpling.
            {"\n"}{"\n"}
            You should see your doctor if you’re not sure what to make of a skin symptom or change in your breast. They can determine whether the change is benign or indicative of breast cancer.
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
      padding: 30,
  },
  title: {
      fontSize: 18,
      textAlign: "center",
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 25,
      fontWeight: "bold",
  },
  paragraph: {
      fontSize: 18,
      lineHeight: 25,
      textAlign: "justify",
      width: 345,
  },
  bullets: {
      position: "relative",
      textAlign: "center",      
      margin: 10,
      justifyContent: "center",
      width: 350,
      marginBottom: 15,
  },
  bullet: {
      fontSize: 16,
      marginTop: 10,
  },
  image: {
      height: 230,
      width: 350,
      resizeMode: "contain",
  }
});

export default Dimpling;
