import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Highlight from "../components/ui/Highlight";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function Result({ userNumber, roundNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width > height) {
    imageSize = 100;
  } else if (width < 380) {
    imageSize = 200;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  let marginTopStyle = {
    marginTop: width > height ? 30 : null,
  };

  return (
    <ScrollView>
      <View style={[styles.rootContainer, marginTopStyle]}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.normalText}>
          Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
          rounds to guess number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default Result;
// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    // width: deviceWidth < 380 ? 200 : 300,
    // height: deviceWidth < 380 ? 200 : 300,
    // borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  normalText: {
    fontFamily: "os-reg",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "os-bold",
    color: Colors.primary400,
  },
});
