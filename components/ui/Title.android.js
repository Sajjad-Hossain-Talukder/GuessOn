import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../utils/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "os-bold",
    color: Colors.white,
    textAlign: "center",
    //borderWidth: Platform.OS == "ios" ? 0 : 2 ,
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2, 
    borderColor: Colors.white,
    padding: 8,
    maxWidth: "80%",
    width: 300,
  },
});
