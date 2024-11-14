import { View, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}> {children}</Text>;
}

export default InstructionText;
const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  text: {
    fontFamily: 'os-reg',
    fontSize: deviceWidth < 380 ? 20 : 24,
    color: Colors.accent500,
  },
});
