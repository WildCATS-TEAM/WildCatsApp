import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import NavBar from "../NavBar";
import { listOfQuestionsAndAnswers } from "../../lib/SelfExamResources/QuestionsAnswers";

const SelfExam = ({ navigation }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [onQuestionNumber, setOnQuestionNumber] = useState(1);
  // const [answer1, setAnswer1] = useState();
  // const [answer2, setAnswer2] = useState();

  const currentStep = listOfQuestionsAndAnswers[currentStepIndex];

  // const goToNextQuestion = () => setOnQuestionNumber(2);

  const goToFindDoctorsPage = () => navigation.navigate("Find Doctors");
  const goToSymptomInfoPage = () => navigation.navigate("Breast Cancer Info");
  const goToHomePage = () => navigation.navigate("Home");

  // console.log("currentStepIndex", currentStepIndex);
  // console.log("onQuestionNumber", onQuestionNumber);
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />

      <Card style={styles.container}>
        <Card.Title>Step {currentStep.step} of 8</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../lib/images/self-exam-1.png")} />
        <Text style={{ marginBottom: 30, marginTop: 20 }}>
          {currentStep.description}
        </Text>
        <Text style={{ marginBottom: 20 }}>
          {currentStep[`question_${onQuestionNumber}`]}
        </Text>

        {onQuestionNumber === 1 &&
          currentStep.options_1.map((option, index) => (
            <Button
              key={index}
              onPress={
                option === "No"
                  ? () => setCurrentStepIndex(currentStepIndex + 1)
                  : () => setOnQuestionNumber(2)
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 10,
              }}
              title={option}
            />
          ))}
        {onQuestionNumber === 2 &&
          currentStep.options_2.map((option, index) => (
            <Button
              key={index}
              onPress={() => setOnQuestionNumber(3)}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 10,
              }}
              title={option}
            />
          ))}
        {onQuestionNumber === 3 &&
          currentStep.options_3.map((option, index) => (
            <Button
              key={index}
              onPress={
                index === 0
                  ? goToFindDoctorsPage
                  : index === 1
                  ? goToSymptomInfoPage
                  : goToHomePage
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 10,
              }}
              title={option}
            />
          ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SelfExam;
