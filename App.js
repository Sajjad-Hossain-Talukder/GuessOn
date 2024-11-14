import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./screens/Home";
import Game from "./screens/Game";
import Result from "./screens/Result";
import Colors from "./utils/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const [isFontLoaded, error] = useFonts({
    "os-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "os-reg": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (isFontLoaded) {
    console.log("Font Loaded: Error: " + error + isFontLoaded);
    SplashScreen.hideAsync();
  }

  function addUserNumber(choosenNumber) {
    setUserNumber(choosenNumber);
    setGameIsOver(false);
  }

  function onGameOver(roundNumber) {
    setGameIsOver(true);
    setRoundNumber(roundNumber); 
  }

  function startNewGame() {
    setUserNumber(null);
    setRoundNumber(0);
  }

  let screen = <Home onConfirm={addUserNumber} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={onGameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <Result
        userNumber={userNumber}
        roundNumber={roundNumber}
        onStartNewGame={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
