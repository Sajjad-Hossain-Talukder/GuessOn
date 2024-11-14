import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

function Highlight({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "os-bold",
  },
});
