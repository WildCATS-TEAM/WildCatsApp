import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import NavBar from "../NavBar";
import { listOfQuestionsAndAnswers } from "../../lib/SelfExamResources/QuestionsAnswers";

const SelfExam = ({ navigation, width }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [onQuestionNumber, setOnQuestionNumber] = useState(1);

  useEffect(() => {
    if (currentStepIndex === 7) setOnQuestionNumber(3);
  }, [currentStepIndex]);

  const currentStep = listOfQuestionsAndAnswers[currentStepIndex];
  const goToFindDoctorsPage = () => navigation.navigate("Find Doctors");
  const goToSymptomInfoPage = () => navigation.navigate("Breast Cancer Info");
  const goToHomePage = () => navigation.navigate("Home");

  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />

      <Card style={styles.container}>
        <Card.Title>Step {currentStep.step} of 8</Card.Title>
        <Card.Divider />
        <Card.Image
          source={currentStep.img}
          style={{ height: 200, width: 200 }}
        />
        {currentStep.boldText && (
          <Text style={{ marginTop: 20, fontWeight: "bold" }}>
            {currentStep.boldText}
          </Text>
        )}
        <Text style={{ marginBottom: 20, marginTop: 10 }}>
          {currentStep.description}
        </Text>
        {currentStep.extra_info &&
          currentStep.extra_info.map((info) => (
            <Text style={{ marginBottom: 10 }}>{info}</Text>
          ))}
        <Text style={{ marginTop: 10, marginBottom: 20 }}>
          {currentStep[`question_${onQuestionNumber}`]}
        </Text>
        {currentStepIndex <= 6 &&
          onQuestionNumber === 1 &&
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
        {currentStepIndex <= 6 &&
          onQuestionNumber === 2 &&
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
        {currentStepIndex === 7 || onQuestionNumber === 3
          ? currentStep.options_3.map((option, index) => (
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
            ))
          : null}
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
