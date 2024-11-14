import { View, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 26 : 36,
    marginHorizontal: deviceWidth < 380 ? 18 : 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
