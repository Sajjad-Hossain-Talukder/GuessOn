import { Text, View, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

function GuessItem({ serial, guessedNumber }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{serial}</Text>
      <Text style={styles.text}>Opponent's Guess: {guessedNumber}</Text>
    </View>
  );
}

export default GuessItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.primary400,
    borderRadius: 40, 
    backgroundColor: Colors.accent500,
    padding: 12,
    marginVertical: 8, 
    elevation: 4, 
    shadowColor: Colors.black,
    shadowRadius: 3 , 
    shadowOffset: {width: 0, height: 0}, 
    shadowOpacity: 0.25, 
    width: "100%"
  },
  text: {
    fontFamily: "os-reg",
  },
});