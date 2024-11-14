import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/Colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

function Home(props) {
  const [enteredNumber, setNewNumber] = useState("");
  const { width, height } = useWindowDimensions();

  console.log("Height : " + height + " Width : " + width);

  function resetHandler() {
    setNewNumber("");
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Enter number between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    props.onConfirm(chosenNumber);
  }

  function changeInTextInputHandler(enteredNumber) {
    setNewNumber(enteredNumber);
  }

  const flipStyle = {
    marginTop: height < 400 ? 30 : 100,
  };

  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={[styles.rootContainer, flipStyle]}>
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText> Enter a number</InstructionText>
              <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                returnKeyType="done"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={changeInTextInputHandler}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetHandler}> Reset </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmHandler}>
                    {" "}
                    Confirm{" "}
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});
