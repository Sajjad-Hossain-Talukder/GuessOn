import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../../utils/Colors";

function Guess({ guessedNumber }) {
  const { width, height } = useWindowDimensions();
  let extraContainer = {
    marginVertical: (width>height) ? 12 : null,
  };

  return (
    <View style={[styles.container, extraContainer]}>
      <Text style={styles.guessText}>{guessedNumber}</Text>
    </View>
  );
}

export default Guess;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  guessText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
