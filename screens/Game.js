import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import Guess from "../components/game/Guess";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import GuessItem from "../components/ui/GuessItem";
import InstructionText from "../components/ui/InstructionText";

function guessRandomNumber(min, max, exlude) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlude) {
    return guessRandomNumber(min, max, exlude);
  } else {
    return rndNum;
  }
}

let minInit = 1;
let maxInit = 100;
let minBoundary = 1;
let maxBoundary = 100;

function Game({ userNumber, onGameOver }) {
  let initialGuess = guessRandomNumber(minInit, maxInit, userNumber);
  const [currentGuess, setNewGuess] = useState(initialGuess);
  const [guessList, addNewGuess] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessList.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function handleGuess(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!!", "Wrong direction may lead to disaster", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let newRndNum = guessRandomNumber(minBoundary, maxBoundary, currentGuess);
    setNewGuess(newRndNum);
    addNewGuess((list) => [newRndNum, ...list]);
  }

  let dimensionStyle = {
    marginTop: width > height ? 22 : 44,
  };
  let paddingOnList = {
    paddingVertical: width > height ? 0 : 8,
  };

  let content = (
    <>
      <Guess guessedNumber={currentGuess} />
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleGuess.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > height) {
    content = (
      <>
        <View style={styles.buttonsContainerLandScape}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleGuess.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
          <Guess guessedNumber={currentGuess} />
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.gameContainer, dimensionStyle]}>
      <Title> Opponent's Guess </Title>
      {content}
      <View style={[styles.guessListContainer, paddingOnList]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={guessList}
          renderItem={(itemData) => {
            return (
              <GuessItem
                serial={guessList.length - itemData.index}
                guessedNumber={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    marginTop: 44,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 8,
  },
  instructionText: {
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerLandScape: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  guessListContainer: {
    flex: 1,
    padding: 8,
  },
});
