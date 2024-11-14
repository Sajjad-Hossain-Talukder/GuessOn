import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../utils/Colors";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary700 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}> {props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 32,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 32,
    backgroundColor: Colors.primary600,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
